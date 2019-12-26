const toggle = document.getElementById("burger");
const links = document.getElementsByClassName("navbar-links")[0];

toggle.addEventListener("click", () => {
    links.classList.toggle("active");
    console.log("success");
});