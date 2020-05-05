// const person = {
//     name: 'Milan',
//     age: 21,
//     location: {
//         city: 'Surat',
//         temp: 105
//     }
// };

// const {name: firstname = 'Anonymous', age} = person;
// console.log(`${firstname} is ${age}.`);

// const {city, temp: temperature} = person.location;
// if(city && temperature) {
//     console.log(`It's ${temperature} in ${city}`);
// }

// const book = {
//     title: 'Ego is the enemy',
//     author: 'Rayan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// }

// const {name: publisherName = 'Self-published'} = book.publisher;

// console.log(publisherName);

// 
// Array desturcturing
// 

// const address = ['48 Pramukh Darshan', 'Surat', 'Gujarat', '394107'];
// const [, city, state = 'Gujarat'] = address; 
// console.log(`You are in ${city} ${state}.`);

const item = ['Coffee(iced)', '$3.00', '$3.50', '$3.75'];
const [itemName, ,mediumPrice,] = item;
console.log(`A medium ${itemName} costs ${mediumPrice}`)