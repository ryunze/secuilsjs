/* Secuils JavaScript, ga perlu banyak ^_O */

class Secuils {
    
    el;

    find (elName) {
        this.el = document.querySelector(elName);
        return new SecuilsDom(this.el);
    }

    findAll (elName) {
        this.el = document.querySelectorAll(elName);
        return new SecuilsDom(this.el);
    }

}

class SecuilsDom {
    
    el;
    
    constructor (el) {
        this.el = el;
    }

    onClick (callback) {
        this.el.addEventListener('click', callback);
    }

    onKeyUp (callback) {
        this.el.addEventListener('keyup', callback);
    }

    onSubmit (callback) {
        this.el.addEventListener('submit', callback);
    }

    toggle (className) {
        this.el.classList.toggle(className);
    }

    text (content) {
        this.el.textContent = content;
    }

    each (callback) {
        this.el.forEach(callback);
    }

}

var $$ = new Secuils();
