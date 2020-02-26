import util from '../helpers/util.js'
import cheeseData from '../helpers/data/cheeseData.js'


const makeCheeseButtons = () => {
    let domString = '';

    const allCheeses = cheeseData.getCheese();

    allCheeses.forEach((cheese) => {
        domString += `<button type="button" id="${cheese.id}" class="cheese-button btn btn-primary">${cheese.type}</button>`;
    })

    util.printToDom('cheese-container', domString);
    buttonEvent();    
};

const selectCheese = (e) => {
    const cheeseId = e.target.id;
    cheeseData.setSelectedCheese(cheeseId);
};

const buttonEvent = () => {
    const radioButtons = document.getElementsByClassName('cheese-button');
    for(let i = 0; i < radioButtons.length; i++){
      radioButtons[i].addEventListener('click', selectCheese);
    }
}

export default { makeCheeseButtons };