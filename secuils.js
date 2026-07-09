/*
* Secuilsjs (Secuil kode-kode javascript)
* Author: Ryunze
* Version: 1.0
* Created: Lupa
* Updated: July, 9 2026
*/

class Secuils {
    
    el = null;

    constructor (el = null) {
        if (el != null) {
            this.el = el;
        }
    }

    /*
    * DOM Selector
    */
    find (elName) {
        this.el = document.querySelector(elName);
        return new Secuils(this.el);
    }

    findAll (elName) {
        this.el = document.querySelectorAll(elName);
        return new Secuils(this.el);
    }

    /*
    * DOM Listener
    */
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

    /*
    * DOM Utils
    */
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

    /*
    * HTTP (POST) Request
    */
    async post (url, body) {

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

    /*
    * HTTP (PATCH) Request
    */
    async patch (url, body) {

        const response = await fetch(url, {
            method: 'PATCH',
            body: body
        });

        const json = await response.json();

        return {
            status: response.ok,
            data: json
        }
    }

    /*
    * URL Redirect
    */
    redirect (url, delay = null) {
        if (delay != null) {
            setTimeout(() => { window.location.replace(url); }, delay);
        } else {
            window.location.replace(url);
        }
    }


}

/*
* Global Variable Initialization
*/
var $$ = new Secuils();
