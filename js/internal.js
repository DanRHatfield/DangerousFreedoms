document.getElementById("hp_logo").addEventListener('click', goHome)
let selectedImage = document.querySelectorAll(".ser_img")
let vpHeight = window.innerHeight
let vpWidth = window.innerWidth

let numImages = document.querySelectorAll(".serviceContent").length
let servCont = document.querySelectorAll(".serviceContent")
let servImg = document.querySelectorAll(".ser_imgSharpening")

if(numImages > 2) {
    console.log("True")
    servCont.forEach(el => {
        el.classList.toggle("threeColumn_content")
    })
    servImg.forEach(el => (
        el.classList.toggle("threeColumn_img")
    ))
}
else if(numImages == 2) {
    console.log("2")
    servCont.forEach(el => {
        el.classList.toggle("twoColumn_content")
    })
    servImg.forEach(el => (
        el.classList.toggle("twoColumn_img")
    ))
}

// document.getElementById('vpResult').innerText = vpHeight + ' ' + vpWidth
// selectedImage.forEach(el => {
//     el.addEventListener('click', showFullImage)
// })

function goHome() {
    open("index.html", '_self')
}

function showFullImage() {
    console.log("It worked!")
    console.log(this)
}
