function topMenu(){
    let target = document.getElementById("top-menu-opp")
    if(!target.classList.contains("normal")){
        target.classList.add('normal')
    }else{
        target.classList.remove('normal')
    }
    let nav2 = document.getElementById('nav-2')
    if(nav2.classList.contains('normal')){
        nav2.classList.remove('normal')
    }
}

function globe(){
    let target = document.getElementById("globe-bg")
    if(!target.classList.contains("normal")){
        target.classList.add('normal')
    }else{
        target.classList.remove('normal')
    }
}

function enter(card){
    console.log('enter')
    const cardDiv = document.getElementById(card)
    if(!cardDiv.classList.contains('visible')){
        cardDiv.classList.add('visible')
    }
    document.getElementById('main-cards').style.display = 'none';
}

function leave(card){
    console.log('leave')
    const cardDiv = document.getElementById(card)
    if(cardDiv.classList.contains('visible')){
        cardDiv.classList.remove('visible')
    }
    document.getElementById('main-cards').style.display = 'flex';
}

function topMenuVisiblity(cards){
    const cardsDiv = document.getElementById(cards)
    if(cardsDiv.classList.contains('hidden')){
        cardsDiv.classList.remove('hidden')
        cardsDiv.classList.add('visible')
    }
    else if(cardsDiv.classList.contains('visible')){
        cardsDiv.classList.add('hidden')
        cardsDiv.classList.remove('visible')
    }
    var caller = event.target;
    if(caller.classList.contains('bgBlack')){
        caller.classList.remove('bgBlack')
    }
    else if(!caller.classList.contains('bgBlack')){
        caller.classList.add('bgBlack')
    }
}

function burger(){
    const nav2 = document.getElementById('nav-2')
    const topMenuOpp = document.getElementById('top-menu-opp')
    if(!nav2.classList.contains('normal')){
        nav2.classList.add('normal')
    }
    else{
        nav2.classList.remove('normal') 
    }
    
}

function menuMobile(element){
    let target = document.getElementById(element)
    if(!target.classList.contains("clicked")){
        target.classList.add('clicked')
    }else{
        target.classList.remove('clicked')
    }
}

