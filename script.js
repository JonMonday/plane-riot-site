const triggers =    [["globe-btn", "globe-icon"],
                    ["menu-btn","menu-icon","menu-close-icon", "menu-close"],
                    ["menu-link-1", "menu-link-1-0", "menu-link-icon-1"],
                    ["menu-link-2", "menu-link-2-0", "menu-link-icon-2"]]
const elements =    [["languages-wrapper"],
                    ["menu-cover","menu"],
                    ["menu-link-1-1", "menu-link-1-2", "menu-link-1-3", "menu-link-icon-1"],
                    ["menu-link-2-1", "menu-link-2-2", "menu-link-2-3", "menu-link-icon-2"]]

document.addEventListener("click", (evnt) => {

    for (var i = 0; i < triggers.length; i++) {
        triggers[i].map((value) => {
            if (value == evnt.target.id) {
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
/**
 * 
 *                 if (document.getElementById(elements[i]).classList.contains("") || document.getElementById(elements[i]).classList.contains("hidden")) {
                    document.getElementById(elements[i]).classList.add("visible");
                    document.getElementById(elements[i]).classList.remove("hidden");
                }
                else if (document.getElementById(elements[i]).classList.contains("visible")) {
                    document.getElementById(elements[i]).classList.add("hidden");
                    document.getElementById(elements[i]).classList.remove("visible");
                }
 */
