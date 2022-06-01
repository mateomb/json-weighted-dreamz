//All main JS imports (blanket)
import { BlanketView } from './view/BlanketView.js';
import { BlanketController } from './controller/BlanketController.js';
import { BlanketModel } from './model/BlanketModel.js';
//All form JS imports
import { FormView } from './view/FormView.js';
import { FormController } from './controller/FormController.js';
import { FormModel } from './model/FormModel.js';

class App {
    /**
     * App constructor
     * Used to find out which page has been requested by the client-side
     * Uses window.location.href to find the url of the page, then
     * using url.match we extract the page name
     */
    constructor() {
        const url = window.location.href;
        //Retuns an array of matches
        const page = url.match(/[a-z]*.html/)[0];  

        switch (page) {
            case 'index.html':
                new BlanketController(new BlanketModel(), new BlanketView());
                break;
            case 'form.html':
                new FormController(new FormModel(), new FormView());
                break;
        }
    }
}

const app = new App();