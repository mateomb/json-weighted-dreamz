export class BlanketView {
    /**
     * BlanketView constructor
     */
    constructor() {
        this.blanketForm = document.querySelector("#form-blanket");
        this.selectsDiv = document.querySelector("#div-selects")
        this.selects = null;
        this.blanketDiv = document.querySelector("#div-blanket");
    }

    /**
     * Renders the HTML select elements, there is no option element as
     * the options are not loaded in the process.
     * 
     * @param {Array} selectIDs - array of strings (select ids)
     */
    renderSelects(selectIDs) {
        selectIDs.forEach((name) => {
            let select = document.createElement('select');
            select.setAttribute("id", name);
            select.options.add(new Option(` Select a ${name} `, 'undefined'));
            this.selectsDiv.appendChild(select);
        });
        this.selects = this.selectsDiv.querySelectorAll('select');
    }

    /**
     * Adds options to the selects in the index.html
     * options represents an array of strings which store the option names
     * 
     * @param {String} selectID
     * @param {Array} options
     */
    addOptions(selectID, options) {
        let select = this.selectsDiv.querySelector(`#${selectID}`);
        select.length = 1;

        let nextSelect = select.nextElementSibling;
        while (nextSelect) {
            nextSelect.length = 1;
            nextSelect = nextSelect.nextElementSibling;
        }

        options.forEach((option) => {
            select.options.add(new Option(option, option));
        });
    }

    /**
     * Renders the image of the bed and blanket based on the current selects.
     * 
     * @returns {undefined}
     */
    renderBlanket() {
        let imgSrc = 'assets/';
        this.selects.forEach((select) => {
            imgSrc += `${select.value}-`;
        });
        imgSrc = imgSrc.slice(0, -1) + '.png';

        this.blanketDiv.querySelector('img').src = imgSrc;
    }
}