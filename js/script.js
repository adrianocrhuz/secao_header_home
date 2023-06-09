let navbar = document.queryselector('.navbar')
let menu = document.querySelector("#menu-icon")

menu.onclick = () => {
    menu.classlist.toggle('.navbar')
    navbar.classlist.toggle('#menu-icon')
}


