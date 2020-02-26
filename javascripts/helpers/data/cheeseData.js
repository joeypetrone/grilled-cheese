const cheeses = [{
    type: 'Swiss',
    color: 'cornsilk',
    price: 0.75,
    id: 'cheese01'
},
{
    type: 'Blue',
    color: 'blue',
    price: 1.50,
    id: 'cheese02'
},
{
    type: 'American',
    color: 'yellow',
    price: 0.75,
    id: 'cheese03'
},
{
    type: 'Cheddar',
    color: 'goldenrod',
    price: 1.25,
    id: 'cheese04'
}
];

let selectedCheeseId = '';

const getCheese = () => {
    return cheeses;
};

const setSelectedCheese = (cheeseId) => {
    selectedCheeseId = cheeseId;
    console.log('selectedCheeseId', selectedCheeseId);
};

export default { getCheese, setSelectedCheese };