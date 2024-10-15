const element = document.querySelector('.hero-content::before');

element.classList.add('floating');

document.getElementsByTagName("body")[0].style.overflow="hidden";

// MORE BTN ABOUT

function readMore() {
    var dots = document.getElementById("dots");
    var more = document.getElementById("more");
    var btnMore = document.getElementById("btn-more");
    var footer = document.querySelector('.footer');
    
    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnMore.innerHTML = "more";
        more.style.display = "none";
        footer.style.paddingTop = "120px";
       
    } else {
        dots.style.display = "none";
        btnMore.innerHTML = "hide";
        more.style.display = "inline";
        btnMore.style.margin = "15px 0";
        footer.style.paddingTop = "0px";
    }
}

