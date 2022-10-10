document.addEventListener( "scroll" , (evnt) => {
    let nav = document.getElementById("nav")
    let position = window.scrollY;
    
    if (position > 70) {
        nav.classList.add("sticky")
    } else {
        nav.classList.remove("sticky")
    }
});