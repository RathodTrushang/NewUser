(() => {
    'use strict';
  
    const forms = document.querySelectorAll('.needs-validation');
  
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        event.preventDefault();
  
        if (!form.checkValidity()) {
          event.stopPropagation();
        } else {
          // Redirect to scenar.html if the form is valid
          window.location.href = 'scenar.html';
        }
  
        form.classList.add('was-validated');
      }, false);
    });
  })();
  