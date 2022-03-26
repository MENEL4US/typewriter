(function() {
    "use strict";
    const elements = document.getElementsByClassName("typewriter");
    for (var element of elements) {
        typeWriter(element)
    }
})();

function typeWriter(element) {
    const text = element.innerHTML.split('');
    element.innerHTML = '';
    text.forEach((c, i) => {
        setTimeout(() => {
            element.innerHTML += c;
        }, 100 * i);
    })
}