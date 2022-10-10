function enter(card){
    document.getElementById(card).style.display = 'block';
    document.getElementById('ban-main').style.display = 'none';
}

function leave(card){
    document.getElementById(card).style.display = 'none';
    document.getElementById('ban-main').style.display = 'flex';
}