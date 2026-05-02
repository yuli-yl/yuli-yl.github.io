// Deferred — DOM is ready when this runs
var toggle = document.getElementById("light-toggle");
if (toggle) {
  toggle.addEventListener("click", function() {
    var isDark = document.documentElement.getAttribute("data-theme") === "dark";
    if (isDark) {
      document.documentElement.removeAttribute("data-theme");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark");
    }
    // Smooth transition
    document.documentElement.classList.add("transition");
    setTimeout(function() {
      document.documentElement.classList.remove("transition");
    }, 500);
  });
}

// Navbar toggle (replaces Bootstrap JS dependency)
var navToggler = document.querySelector('.navbar-toggler');
var navCollapse = document.getElementById('navbarNav');
if (navToggler && navCollapse) {
  navToggler.addEventListener("click", function() {
    navCollapse.classList.toggle("show");
    var expanded = navCollapse.classList.contains("show");
    navToggler.setAttribute("aria-expanded", expanded);
    navToggler.classList.toggle("collapsed", !expanded);
  });
}
