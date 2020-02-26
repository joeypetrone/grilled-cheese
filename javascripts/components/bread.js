import util from '../helpers/util.js'
import breadData from '../helpers/data/breadData.js'


const makeBreadRadioButtons = () => {
    let domString = '';

    const allBreads = breadData.getBread();

    allBreads.forEach((bread) => {
        domString += '<div class="custom-control custom-radio custom-control-inline">';
        domString += `<input type="radio" id="${bread.id}" name="customRadioInline1" class="bread-button custom-control-input">`;
        domString += `<label class="custom-control-label" for="${bread.id}">${bread.type}</label>`;
        domString += '</div>';

    })

    util.printToDom('bread-container', domString);
    radioButtonEvent();
    
};

const selectBread = (e) => {
    const breadId = e.target.id;
    breadData.setSelectedBread(breadId);
};

const radioButtonEvent = () => {
    const radioButtons = document.getElementsByClassName('bread-button');
    for(let i = 0; i < radioButtons.length; i++){
      radioButtons[i].addEventListener('click', selectBread);
    }
}

export default { makeBreadRadioButtons };

