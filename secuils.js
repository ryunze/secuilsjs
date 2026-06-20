/* Secuils JavaScript, ga perlu banyak ^_O */

class Secuils {
    
    el;

    constructor (el = null) {
        if (el != null) {
            this.el = el;
        }
    }

    // Selecotor
    find (elName) {
        this.el = document.querySelector(elName);
        return new Secuils(this.el);
    }

    findAll (elName) {
        this.el = document.querySelectorAll(elName);
        return new Secuils(this.el);
    }

    // Listener
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

    // DOM
    disabled (status = true) {
        this.el.disabled = status;
    }

    each (callback) {
        this.el.forEach(callback);
    }

    text (content) {
        this.el.textContent = content;
    }

    toggle (className) {
        this.el.classList.toggle(className);
    }

    // Fetch
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

var $$ = new Secuils();
