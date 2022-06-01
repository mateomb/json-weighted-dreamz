export class FormView {
    /**
     * FormView constuctor
     */
    constructor() {
        this.inputs = null;
        this.form = document.querySelector('#form-blanket-name');
    }

    /**
     * Creates form inputs based on the injected JS object with data which 
     * was done in index.html.
     * dataObject is contains the input data
     * @param {Object} dataObject 
     * @returns {undefined}
     */
    createInputs(dataObject) {
        for (let property in dataObject) {
            document.querySelector('fieldset').insertAdjacentHTML('beforeend',
                `
                <div class="w3-section">
                <label class="form-label">${property.charAt(0).toUpperCase() + property.slice(1)}</label>
                <input class="form-input w3-border" value='${dataObject[property]}' size='30' type="text" name="${property}">
                <div id="${property}" class="form-label"></div>
                </div>
                `);
        }
        this.inputs = document.querySelectorAll('fieldset input');
    }

    /**
     * Validation for the form.html
     * Validation does not full work nor cover all possible outcomes, I was not sure how to properly
     * deal with the code as we were supposed to validate using names. I've done ID validation multiple times
     * but strugled when it comes to names.
     */
    validteInputs() {
        document.querySelector('#form-blanket-name').addEventListener('submit', (e) => {
            let messages = []
            let address = []
            let code = []
            //let propertyValues = []
            if (document.getElementsByName('city')[0].value === '' || document.getElementsByName('city')[0].value == null) {
                messages.push('Please enter a valid city name');
            }
            if (document.getElementsByName('address')[0].value === '' || document.getElementsByName('address')[0].value == null) {
                address.push('Please enter your address');
            }
            if (document.getElementsByName('postalcode')[0].value === '' || document.getElementsByName('postalcode')[0].value == null) {
                code.push('Please enter a valid postal code');
            }

            /** 
            if (document.getElementsByName(property)[0].value === '' || document.getElementsByName(property)[0].value == null){
                propertyValues.push('Please enter a valid `${propery}`')
            }
            
            if (propertyValues.length > 0){
                e.preventDefault();
                document.getElementById(property).innerText = propertyValues.join(', ')
            }*/

            if (messages.length > 0) {
                e.preventDefault();
                document.getElementById('errorCity').innerText = messages.join(', ');
            }
            if (address.length > 0) {
                e.preventDefault();
                document.getElementById('errorAddress').innerText = address.join(', ');
            }
            if (code.length > 0) {
                e.preventDefault();
                document.getElementById('errorCode').innerText = code.join(', ');
            }
            else{
                // Alerts the user that he has booked a blanket as there is no follow-up page
                alert('Information has been booked! Please check your Local Storage');
            }
        });
    }
}
