const breads = [{
    type: 'White',
    color: 'white',
    price: 0.75,
    id: 'bread01'
},
{
    type: 'Wheat',
    color: 'wheat',
    price: 1.00,
    id: 'bread02'
},
{
    type: 'Rye',
    color: 'burlywood',
    price: 1.50,
    id: 'bread03'
},
{
    type: 'Pumpernickel',
    color: '#764d41',
    price: 3,
    id: 'bread04'
}
];

let selectedBreadId = '';

const getBread = () => {
    return breads
};

const setSelectedBread = (breadId) => {
    selectedBreadId = breadId;
    console.log('selectedBreadId', selectedBreadId);
};

export default { getBread, setSelectedBread };