document.getElementById("services").addEventListener('click', displayservices)

function displayservices () {
    const serv_list = document.getElementById("services_list")

    if(serv_list.style.display == 'none') {
        serv_list.style.display = 'block'
    }
    else {
        serv_list.style.display = 'none'
    }
}