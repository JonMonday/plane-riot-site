function enterArt(element){
    const tag = document.getElementById(element)
    if(!tag.classList.contains('hover')){
        tag.classList.add('hover')
    }
}

function leaveArt(element){
    const tag = document.getElementById(element)
    if(tag.classList.contains('hover')){
        tag.classList.remove('hover')
    }
}