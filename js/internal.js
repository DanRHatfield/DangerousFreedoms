document.getElementById("hp_logo").addEventListener('click', goHome)
let selectedImage = document.querySelectorAll(".ser_img")
let vpHeight = window.innerHeight
let vpWidth = window.innerWidth

document.getElementById('vpResult').innerText = vpHeight + ' ' + vpWidth
selectedImage.forEach(el => {
    el.addEventListener('click', showFullImage)
})

function goHome() {
    open("index.html", '_self')
}

function showFullImage() {
    console.log("It worked!")
    console.log(this)
}
