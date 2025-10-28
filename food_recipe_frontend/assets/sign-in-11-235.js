(function () {
  'use strict';

  // PUBLIC_INTERFACE
  function initSignInInteractions() {
    /** Initialize basic interactions for the Sign In screen. */

    // Enhance focus style by toggling class on parent rectangles
    var inputs = document.querySelectorAll('.input-rect input');
    inputs.forEach(function (inp) {
      inp.addEventListener('focus', function () {
        var parent = inp.closest('.input-rect');
        if (parent) parent.classList.add('is-focus');
      });
      inp.addEventListener('blur', function () {
        var parent = inp.closest('.input-rect');
        if (parent) parent.classList.remove('is-focus');
      });
    });

    // Password toggle
    var toggle = document.querySelector('.toggle-password');
    var pwd = document.getElementById('password');
    if (toggle && pwd) {
      toggle.addEventListener('click', function () {
        var isHidden = pwd.getAttribute('type') === 'password';
        pwd.setAttribute('type', isHidden ? 'text' : 'password');
        toggle.setAttribute('aria-pressed', isHidden ? 'true' : 'false');
        toggle.textContent = isHidden ? 'Hide' : 'Show';
      });
    }

    // Button hover is handled by CSS; add simple keypress handler for accessibility
    var primary = document.querySelector('.primary-btn');
    if (primary) {
      primary.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          primary.click();
        }
      });
    }
  }

  // Inject small focus ring helper styles
  var style = document.createElement('style');
  style.innerHTML = '.input-rect.is-focus{box-shadow:0 0 0 3px rgba(37,99,235,0.2);border-color:#93c5fd;}';
  document.head.appendChild(style);

  // Initialize on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initSignInInteractions);
  } else {
    initSignInInteractions();
  }
})();
