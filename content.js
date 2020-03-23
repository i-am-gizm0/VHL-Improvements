console.log("");
console.log("[VHLI:STRT]\tImproving VHL");
// Your code here...
try {
    console.log("[VHLI:INFO]\tImproving bottom navbar");
    var lowerNavBar = document.getElementById("activityFooterWrap");
    lowerNavBar.style.boxShadow = "0 0 8px #424242";
    lowerNavBar.style.transition = "0.5s";
    lowerNavBar.style.bottom = "-87px";
    lowerNavBar.style.position = "sticky";
    lowerNavBar.style.padding = "0px 5px 5px 5px";
    lowerNavBar.style.borderRadius = "8px";
    lowerNavBar.onmouseenter = function() {lowerNavBar.style.bottom = "0px"};
    lowerNavBar.onmouseleave = function() {lowerNavBar.style.bottom = "-87px"};
    console.log("[VHLI:INFO]\tBottom navbar improved");
} catch (e) {
    console.warn("[VHLI:WARN]\tSomething went wrong while trying to improve the bottom navbar. Does the page have one?");
}
try {
    console.log("[VHLI:INFO]\tImproving wordbank");
    var focusedEl = document.activeElement;
    document.addEventListener('focusin', (e)=>{focusedEl = e.target});
    var termEls = document.querySelectorAll('.c-reference-wordbank__content');
    for (var i = 0; i < termEls.length; i++) {
        termEls[i].onclick = function() {
            if (this.checked != undefined) {
                // Term is checked
                this.checked = undefined;
                this.style.textDecoration = "initial";
            } else {
                // Term is not checked
                this.checked = true;
                this.style.textDecoration = "line-through red";
            }
            if (focusedEl.tagName == 'INPUT') {
                focusedEl.value == this.innerText;
            }
        }
    }
    console.log("[VHLI:INFO]\tWordbank improved");
} catch (e) {
    console.warn("[VHLI:WARN]\tSomething went wrong while trying to improve the wordbank. Does one exist on the page?");
}
try {
    console.log("[VHLI:INFO]\tImproving page loading");
    window.addEventListener("beforeunload", function() {
        document.querySelector('.activityFooterWrap').classList.add('loading');
    });
    var stylesheet = document.createElement("style");
    stylesheet.id = "vhli-style";
    stylesheet.innerHTML = ".loading{border-top:solid 4px #19dcea;-webkit-animation:color-change-5x 3s linear infinite alternate both;animation:color-change-5x 3s linear infinite alternate both}@-webkit-keyframes color-change-5x{0%{border-top-color:#19dcea}25%{border-top-color:#b22cff}50%{border-top-color:#ea2222}75%{border-top-color:#f5be10}100%{border-top-color:#3bd80d}}@keyframes color-change-5x{0%{border-top-color:#19dcea}25%{border-top-color:#b22cff}50%{border-top-color:#ea2222}75%{border-top-color:#f5be10}100%{border-top-color:#3bd80d}}";
    document.body.appendChild(stylesheet);
    console.log("[VHLI:INFO]\tPage loading improved")
} catch (e) {
    console.warn("[VHLI:WARN]\tSomething went wrong while trying to improve page loading.");
}
try {
    console.log("[VHLI:INFO]\tImproving Colors");
    var completionStatus = document.querySelector("#status > p");
    if (completionStatus.innerText.contains('100.0%')) {
    completionStatus.style.borderBottomColor = '#16c01c';
    completionStatus.style.borderTopColor = '#16c01c';
    }
    var attempts = document.querySelector("#activity_attempts");
    if (attempts.innerText.contains('unlimited')) {
    attempts.style.color = '#16c01c';
    }
    var mstylesheet = document.querySelector('#vhli-style');
    mstylesheet.innerHTML += "\nbutton { color: black; }";
} catch (e) {
    console.log("[VHLI:WARN]\tSomething went wrong while trying to improve colors.");
}
try {
    console.log("[VHLI:INFO]\tRemoving extra options");
    document.querySelector("body > div.ns-masthead.ns-music-v1.vol.t-vol > header > div.c-masthead > nav > div > ul").removeChild(document.querySelector("body > div.ns-masthead.ns-music-v1.vol.t-vol > header > div.c-masthead > nav > div > ul > li:nth-child(4)"));
    console.log("[VHLI:INFO]\tImproved extra options");
} catch (e) {
    console.log("[VHLI:WARN]\tThere was a problem removing extra options");
}
console.log("[VHLI:DONE]\tVHL Improved!");
console.log("");