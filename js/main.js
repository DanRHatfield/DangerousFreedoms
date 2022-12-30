document.getElementById("services").addEventListener('click', displayservices)
document.getElementById("hp_logo").addEventListener('click', goHome)


function displayservices () {
    const serv_list = document.getElementById("services_list")

    if(serv_list.style.display == 'none') {
        serv_list.style.display = 'block'
    }
    else {
        serv_list.style.display = 'none'
    }
}

function goHome() {
    open("index.html", '_self')
}