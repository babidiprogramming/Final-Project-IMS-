const item = require('../server/dbmodel/item');
const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/inventory')
.then(() =>{
    console.log("Connection Open");
})
.catch(err =>{
    console.log("Error");
    console.log(err);
})

const seedDB = async() =>{
    const items = new item(
    {
        name: 'Headset',
        category: 'Electronics',
        quantity: 3,
        price: '160',
        description: 'Sample description Only'
    }
   )
await item.insertMany([
    {
        name: 'Microphone',
        category: 'Electronics',
        quantity: 10,
        price: '800',
        description: 'Sample description Only'
    },
    {
        name: 'Magic flakes',
        category: 'snacks',
        quantity: 7,
        price: '50',
        description: 'Sample description Only'
    },
    {
        name: 'Chicken Joy',
        category: 'Food',
        quantity: 5,
        price: '160',
        description: 'Sample description Only'
    },
    {
        name: 'Burger',
        category: 'Food',
        quantity: 10,
        price: '80',
        description: 'Sample description Only'
    },
    {
        name: 'Lipstick',
        category: 'Cosmetics',
        quantity: 9,
        price: '350',
        description: 'Sample description Only'
    },
    {
        name: 'Powerbank',
        category: 'Eletronics',
        quantity: 3,
        price: '1300',
        description: 'Sample description Only'
    },
    {
        name: 'Camping Chair',
        category: 'Camping Gears',
        quantity: 5,
        price: '469',
        description: 'Sample description Only'
    },
    {
        name: 'Mosquito Lamp',
        category: '	Electronics',
        quantity: 8,
        price: '550',
        description: 'Sample description Only'     
    }
]);
}

seedDB().then(() =>{
    mongoose.connection.close();
});