const html = document.querySelector("html");
const ldmode = document.querySelector(".ldmode");
const sun = document.querySelector(".sun");
const moon = document.querySelector(".moon");

let dark = false;

ldmode.addEventListener("click", () => {
    html.classList.toggle("dark");

    if(dark) {
        dark = false;
        sun.style.display = "inline";
        moon.style.display = "none";
    } else {
        dark = true;
        moon.style.display = "inline";
        sun.style.display = "none";
    }
});
