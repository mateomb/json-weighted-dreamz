import { selectData } from './selectData.js';

export class BlanketModel {
    //External file JS Object file selectData.js
    static store = selectData;

    /**
     * Creates an object representing the blanket model.
     * 
     * @returns {BlanketModel} The object representing the blanket model.
     */
    constructor() {
        this.type = "undefined";
        this.pattern = "undefined";
        this.color = "undefined";
    }

    /**
     * Returns an array of this class properties names.
     * The returned array is used by View to dynamically render the selects. 
     * For each Model property, a select is being rendered in View.
     * 
     * @returns {Array} array of property names (strings)
     */
    getProperties() {
        let properties = [];
        for (let property in this) {
            properties.push(property);
        }
        return properties;
    }

    /**
     * Extracts the data from the external resource file selectData.js
     * which is then used to generate select options.
     * It then prepares options by iterating over the extracted JS object properties
     *  
     * @param {String} selectID - select ID
     * @returns {Array} array of select's options (strings)
     */
    getOptions(selectID) {
        let data;
        switch (selectID) {
            case 'type':
                data = BlanketModel.store;
                break;
            case 'pattern':
                data = BlanketModel.store[this.type];
                break;
            case 'color':
                data = BlanketModel.store[this.type][this.pattern];
                break;
        }
        let options = [];
        for (let objectProperty in data) {
            options.push(objectProperty);
        }
        return options;
    }
    /**
     * Stores the blanket data accross browser sessions. In case the user leaves the site
     * and comes back to it at a later date. localStorage is used to store the model as an 
     * JSON string
     * 
     * @returns {undefined}
     */
    persist() {
        localStorage.setItem('blanket', JSON.stringify(this));
    }
}