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
}
];

let selectedBreadId = '';

const getBread = () => {
    return breads
};

const setSelectedBread = (breadId) => {
    selectedBreadId = breadId;
    console.log('slectedBreadId', selectedBreadId);
};

export default { getBread, setSelectedBread };