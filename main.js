
document.addEventListener("DOMContentLoaded", function () {

    let links = document.querySelectorAll("nav a, .button");

    for (let i = 0; i < links.length; i++) {
        links[i].addEventListener("click", function (event) {

            let target = document.querySelector(this.getAttribute("href"));

            if (target) {
                event.preventDefault();
                target.scrollIntoView({
                    behavior: "smooth"
                });
            }

        });
    }

    let year = new Date().getFullYear();
    document.querySelector("footer p").innerHTML =
        "Copyright © " + year + " My Portfolio";

});
