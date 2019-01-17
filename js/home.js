//Menu mobile toogle
document.addEventListener('DOMContentLoaded', function (){
    let m = document.getElementById('laptop');
    m.addEventListener('click', function () {
        let links = document.getElementsByClassName('link');
        for(let i = 0; i<links.length; i++){
            console.log("i: " + i);
            links[i].classList.toggle('open');
        }
    }, true);
}, false);

//Scroll animation
let isScrolling = false;
window.addEventListener("scroll", throttleScroll, false);

function throttleScroll(e) {
    if (isScrolling == false) {
        window.requestAnimationFrame(function() {
            scrolling(e);
            isScrolling = false;
        });
    }
    isScrolling = true;
}

document.addEventListener("DOMContentLoaded", scrolling, false);

let firstBox = document.getElementById("laptop");
let secondBox = document.getElementById("text1");


function scrolling(e) {

    if (isPartiallyVisible(firstBox)) {
        firstBox.classList.add("on-anim-left");
        firstBox.classList.add("save");
        console.log("Visible Img");
    }else{
        console.log("Invisible Img");
    }

    if (isPartiallyVisible(secondBox)) {
        secondBox.classList.add("on-anim-right");
        secondBox.classList.add("save");
        console.log("Visible Parrafo");
    }else{
        console.log("Invisible Parrafo");
    }

}

function isPartiallyVisible(el) {
    let elementBoundary = el.getBoundingClientRect();

    let top = elementBoundary.top;
    let bottom = elementBoundary.bottom;
    let height = elementBoundary.height;

    return ((top + height >= 0) && (height + window.innerHeight >= bottom));
}
