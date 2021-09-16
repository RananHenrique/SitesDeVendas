let time = 4000,
    currentImageIndex = 0,
    images = document
            .querySelectorAll("#slider img")
    max = images.length;

function nexImage() {

    images[currentImageIndex]
        .classList.remove("selected")

    currentImageIndex++

    if(currentImageIndex >= max)
        currentImageIndex=0


    images[currentImageIndex]
        .classList.add("selected")
}

function start () {
    setInterval(( ) => {
        //troca de img
        nexImage()
    }, time)
}


window.addEventListener("load", start)

//menu
const btMobile = document.getElementById('btn-mobile');

function togglemenu(){
    const nav = document.getElementById('nav');
    nav.classList.toggle('active');
}

btMobile.addEventListener('click' , togglemenu);