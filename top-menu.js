const triggers = [['logo-img', 'logo-arrow', 'top-menu-close'],
                    ["globe-btn", "globe-bg"]]
const elements =  [["top-menu-opp"],
                    ["globe-btn"],]
document.addEventListener("click", (evnt) => {
    for (var i = 0; i < triggers.length; i++) {
        triggers[i].map((value) => {
            if (value == evnt.target.id || evnt.target.classList.contains(value)) {
                handle(elements[i])
            }
        })
    }
    
});

function handle( elements) {
    for (var i = 0; i < elements.length; i++){
        if (document.getElementById(elements[i]).classList.contains("normal")) {
            document.getElementById(elements[i]).classList.remove("normal");
        }
        else if (!document.getElementById(elements[i]).classList.contains("normal")) {
            document.getElementById(elements[i]).classList.add("normal");
        }
    }

}

function enter(card){
    const cardDiv = document.getElementById(card)
    if(!cardDiv.classList.contains('visible')){
        cardDiv.classList.add('visible')
    }
    document.getElementById('main-cards').style.display = 'none';
}

function leave(card){
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