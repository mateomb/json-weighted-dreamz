/**
 * Responds to user inputs in the form.hmtl
 */
export class FormController {
    /**
     * @param {type} model - The model the controller interacts with.
     * @param {type} view - The view the controller interatcs with.
     * @returns {FormController} The object representing the form controller.
     */

    // FormController Constructor
    constructor(model, view) {
        this.model = model;
        this.view = view;
        this.view.createInputs(this.model.getInputData());
        this.view.validteInputs();

        // Registers a event handler which deals with all changes done by handleInputChange
        this.view.inputs.forEach((input) => {
            input.addEventListener('change', this.handleInputChange);
        });

        // Registers the handleFormSubmit to the form
        this.view.form.addEventListener('submit', this.handleFormSubmit);
    }

    //Updates the form model
    handleInputChange = (event) => {
        let input = event.target;
        this.model[input.name] = input.value;
    }

    // Handles inputed changes on FormSubmit
    handleFormSubmit = (event) => {
        // Prevents the the form from submitting as there is not page after
        event.preventDefault();
        // Saves local storage data
        this.model.persist();
    }
}