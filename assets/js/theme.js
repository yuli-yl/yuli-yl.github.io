// Must be in <head> to prevent theme flicker on load
(function() {
  var theme = localStorage.getItem("theme");
  if (!theme) {
    var prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    theme = prefersDark ? 'dark' : 'light';
    localStorage.setItem("theme", theme);
  }
  if (theme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
  }
  // light mode = no attribute needed, CSS defaults handle it
})();
