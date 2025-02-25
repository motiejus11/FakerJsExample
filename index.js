// npm init
// npm install @faker-js/faker
//node index.js paleidimui
//npm install fs

//https://www.npmjs.com/package/@faker-js/faker
//https://fakerjs.dev/api/

const { faker } = require('@faker-js/faker');
const fs = require('fs');


//Sugeneruoti netikra varda ir pavarde
let randomName = faker.person.firstName();
let randomSurname = faker.person.lastName();

//sugeneruoti 100 netikru users/people, su siais duomenimis
// vardas
// pavarde
//telefono numeris
//email
//username
//password
//netikra gimimo data



function generateUser() {
    return {
        "name": faker.person.firstName(),
        "surname": faker.person.lastName(),
        "phone": faker.phone.number(),
        "email": faker.internet.email(),
        "username": faker.internet.username(),
        "password": faker.internet.password(),
        "birthdate": faker.date.past() //data praeityje
    }
}

function generateProduct() {
    return {
        "title": faker.commerce.product(),
        "description": faker.commerce.productDescription(),
        "price": faker.commerce.price()
    }
}

function generateCategory() {
    return {
        "title": faker.commerce.department(),
        "description": faker.commerce.productDescription()
    }
}

function generateToy() {
    return {
        "title": faker.commerce.product(),
        "description": faker.commerce.productDescription(), 
        "price" : faker.commerce.price()
    }
}

function generateCompany() {
    return {
        "title": faker.commerce.department()
    }
}

//Susikurti daug(100 users) duomenu objektu

// 11:08 - 11:18

// isisaugoti duomenis i duomenu failus. json ir csv
//lengvai pakeisti generuojamu duomenu kieki

const users = Array.from({length: 100}, generateUser);
const products = Array.from({length:100}, generateProduct );
const categories = Array.from({length:100}, generateCategory );
const toys = Array.from({length:100}, generateToy );
const companies = Array.from({length:10}, generateCompany);

//users turim pasiversti i paprasta teksta
fs.writeFileSync('users.json', JSON.stringify(users, null, 4));
fs.writeFileSync('products.json', JSON.stringify(products, null, 4));
fs.writeFileSync('categories.json', JSON.stringify(categories, null, 4));
fs.writeFileSync('toys.json', JSON.stringify(toys, null, 4));
fs.writeFileSync('companies.json', JSON.stringify(companies, null, 4));

// JSON
// {
    // "name": "Kasey",
    // "surname": "Kilback",
    // "phone": "(724) 789-0129 x7685",
    // "email": "Tianna_McLaughlin@hotmail.com",
    // "username": "Reuben.Stamm",
    // "password": "Xno0gTMtYShZ1RV",
    // "birthdate": "2024-08-01T16:06:18.261Z"
// }

//CSV
// name, surname, phone, email, username, password, birthdate  //headeris
//Kasey, Kilback, (724) 789-0129 x7685, Tianna_McLaughlin@hotmail.com, Reuben.Stamm, Xno0gTMtYShZ1RV, 2024-08-01T16:06:18.261Z

const csvHeader = Object.keys(users[0]).join(',') + '\n';
let csvRows = "";

// const csvRows = users.map(user => 
//     Object.values(user).map(value => 
//       typeof value === 'object' ? JSON.stringify(value).replace(/,/g, ';') : value
//     ).join(',')
//   ).join('\n');

for (let i=0; i< users.length; i++) {
    let csvRow = Object.values(users[i]).join(',') + '\n';
    csvRows += csvRow;
}
//irasau csvHeader ir viena csvRow
fs.writeFileSync('users.csv', csvHeader + csvRows )


console.log(csvHeader)

// console.log(users)
// console.log(users.length)
// Primityvus generavimas
// const users = [];
// for(let i=0; i< 100; i++) {
//     let user = {
//         "name": faker.person.firstName(),
//         "surname": faker.person.lastName(),
//         "phone": faker.phone.number(),
//         "email": faker.internet.email(),
//         "username": faker.internet.username(),
//         "password": faker.internet.password(),
//         "birthdate": faker.date.past() //data praeityje
//     };

//     users.push(user)
// } 

// console.log(users)

// console.log(randomName);
// console.log(randomSurname);
// console.log(user);
// console.log(product);
// console.log(category)
// console.log(toy)

