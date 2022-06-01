/**
 * Responds to user inputs in the index.hmtl
 */
export class BlanketController {
    /**
     * @param {type} model - The model the controller interacts with.
     * @param {type} view - The view the controller interatcs with.
     * @returns {BlanketController} The object representing the blanket controller.
     */

    /** 
     * BlanketController constructor
     * Firstly it renders all the selects with renderSelect
     * Secondly it populates the select
     * Thirdly adds the options to the selects
     * It then handles the selectChange and the formSubmit
     */
    constructor(model, view) {
        this.model = model;
        this.view = view;
        // 1. render all selects
        let properties = this.model.getProperties();
        this.view.renderSelects(properties);
        // 2. populate the first select
        let firstSelectID = properties[0];
        this.view.addOptions(firstSelectID, this.model.getOptions(firstSelectID));
        // 4. register form submit handler
        this.view.selects.forEach((select) => {
            select.addEventListener("change", this.handleSelectChange);
        });
        this.view.blanketForm.addEventListener('submit', this.handleFormSubmit);
    }

    // Updates the model and view (blanketDiv + selectsDiv)
    handleSelectChange = (event) => {
        let select = event.target;
        this.model[select.id] = select.value;
        console.log(this.model);
        let nextSelect = select.nextElementSibling;
        while (nextSelect) {
            this.view.addOptions(nextSelect.id, this.model.getOptions(nextSelect.id));
            nextSelect = nextSelect.nextElementSibling;
        }
        this.view.renderBlanket();
    }

    // Saves the information to the Local Storage
    handleFormSubmit = (event) => {
        this.model.persist();
    }
}

