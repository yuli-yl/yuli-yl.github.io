// Script is deferred, so DOM is ready when this runs
const mode_toggle = document.getElementById("light-toggle");

if (mode_toggle) {
    mode_toggle.addEventListener("click", function() {
        const current = localStorage.getItem("theme");
        setTheme(current === "dark" ? "light" : "dark");
    });
}

function setTheme(theme) {
    document.documentElement.classList.add("transition");
    setTimeout(() => document.documentElement.classList.remove("transition"), 500);

    if (theme === "dark") {
        document.documentElement.setAttribute("data-theme", "dark");
    } else {
        document.documentElement.removeAttribute("data-theme");
    }
    localStorage.setItem("theme", theme || "light");
}
