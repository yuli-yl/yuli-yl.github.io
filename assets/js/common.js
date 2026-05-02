// Vanilla JS replacement for jQuery-dependent common.js
document.addEventListener("DOMContentLoaded", function() {
  document.querySelectorAll('a.abstract').forEach(function(el) {
    el.addEventListener('click', function() {
      var hidden = el.closest('li').querySelector('.abstract.hidden');
      if (hidden) hidden.classList.toggle('open');
    });
  });

  document.querySelectorAll('a.bibtex').forEach(function(el) {
    el.addEventListener('click', function() {
      var hidden = el.closest('li').querySelector('.bibtex.hidden');
      if (hidden) hidden.classList.toggle('open');
    });
  });
});
