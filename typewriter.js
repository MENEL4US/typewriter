/**
 * https://github.com/MENEL4US/typewriter 
 * 
 * Luiz Mendes
 * https://www.linkedin.com/in/luiz-mendes-dev/
 * 
 * 
 * Florianópolis, SC. Brazil
 * 2022-03-26
 */
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