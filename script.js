/**
 * Created by G.James on 2/24/2015.
 */
 function addEvent(el, type, fn) {
        if (typeof addEventListener !== "undefined") {
            el.addEventListener(type, fn, false);
        } else if (typeof attachEvent !== "undefined") {
            el.attachEvent("on" + type, fn);
        } else {
            el["on" + type] = fn;
        }
    }
 var slideOutNav = document.querySelector('.slideOutNav'),
	checkBox = document.getElementById('hamburger'),
    links = slideOutNav.getElementsByTagName('li'),
    links = Array.prototype.slice.call(links);
    links.forEach(function(el) {
        addEvent(el,'click',function (e) {
           	checkBox.checked = false;
        })
    })
