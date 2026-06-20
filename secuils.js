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

    async postJson (url, body) {

        const response = await fetch(url, {
            method: 'POST',
            body: body
        });

        const json = await response.json();

        return {
            status: response.ok,
            data: json
        }
    }

}

class SecuilsDom {
    
    el;
    
    constructor (el) {
        this.el = el;
    }

    on (eventName, callback) {
        this.el.addEventListener(eventName, callback);
    }

    onClick (callback) {
        this.el.addEventListener('click', callback);
    }

    onKeyUp (callback) {
        this.el.addEventListener('keyup', callback);
    }

    onSubmit (callback) {

        this.el.addEventListener('submit', (event) => {

            const formData = new FormData(event.target);
			const objectData = Object.fromEntries(formData.entries());

            callback(event, objectData);
        });

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
