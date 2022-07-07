let header = document.getElementById("header");
let linkItem = document.getElementsByClassName("list-item");
let link = document.getElementsByTagName("a")


window.addEventListener("scroll", function () {

    if (window.scrollY >= 200) {
        header.classList.add("active");
        linkItem.classList.add("active");
        link.classList.add("active");
    } else {
        header.classList.remove("active");
        linkItem.classList.remove("active");
        link.classList.remove("active");
    }

});