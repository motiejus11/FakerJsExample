// npm init
// npm install @faker-js/faker
//node index.js paleidimui

//https://www.npmjs.com/package/@faker-js/faker
//https://fakerjs.dev/api/

const {faker} = require('@faker-js/faker');

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

const user = {
    "name" : faker.person.firstName(),
    "surname": faker.person.lastName(),
    "phone": faker.phone.number(),
    "email": faker.internet.email(),
    "username": faker.internet.username(),
    "password": faker.internet.password(),
    "birthdate": faker.date.past() //data praeityje
};

const product = {
    "title": faker.commerce.product(),
    "description": faker.commerce.productDescription(),
    "price": faker.commerce.price()
}

console.log(randomName);
console.log(randomSurname);
console.log(user);
console.log(product);

