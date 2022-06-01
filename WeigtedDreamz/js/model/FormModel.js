export class FormModel {
    /**
     * FormModel constuctor
     */
    constructor() {
        this.name = "";
        this.init();
    }

    /**
     * Initializes the object properties.
     * New properties are equal to the the data loaded from the localStorage.
     * 
     * @returns {undefined}
     */
    init() {
        let blanket = JSON.parse(localStorage.getItem('blanket'));
        for (let property in blanket) {
            this[property] = blanket[property];
        }
    }

    /**
     * Converts this object to a data object for the view.
     * Done by stringifying the object in order to get rid of the methods.
     * Returns the result as an JS data object
     * 
     * @returns {Object} a simple data object with inputs for the form view 
     */
    getInputData() {
        let inputsString = JSON.stringify(this);
        return JSON.parse(inputsString);
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


