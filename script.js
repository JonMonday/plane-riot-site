const triggers =    [["globe-btn", "globe-bg"],
                    ["menu-btn","menu-icon","w-close", "w-close-bg"],
                    ["ml1", "mlt1", "mli1"],
                    ["ml2", "mlt2", "mli2"],
                    ["logo","logo-1","logo-2","b-close","b-close-bg"],
                    ["tog-games"],
                    ["tog-forge"],
                    ["tog-esports"],
                    ["tog-entertaiment"],
                    ["tog-business"],]

const elements =    [["languages-wrapper"],
                    ["menu-cover","menu"],
                    ["mhl1"],
                    ["mhl2"],
                    ["left-menu", "left-menu-cover"],
                    ['cards-1-5'],
                    ['cards-6-10'],
                    ['cards-11-12'],
                    ['cards-13-15'],
                    ['cards-16-19']]

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
                if (document.getElementById(elements[i]).classList.contains("") || document.getElementById(elements[i]).classList.contains("hidden")) {
                    document.getElementById(elements[i]).classList.add("visible");
                    document.getElementById(elements[i]).classList.remove("hidden");
                }
                else if (document.getElementById(elements[i]).classList.contains("visible")) {
                    document.getElementById(elements[i]).classList.add("hidden");
                    document.getElementById(elements[i]).classList.remove("visible");
                }
            }

}

