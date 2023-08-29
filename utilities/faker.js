const { faker } = require('@faker-js/faker');


const myEmail = faker.location.streetAddress()


function generatePerson(type, id) {
    let person = {
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName()
    }

    const extra = {
        phoneNumber: faker.phone.number(),
        username: faker.internet.userName({
            firstName: person.firstName, lastName: person.lastName
        }),
        email: faker.internet.email({ firstName: person.firstName, lastName: person.lastName }),
        password: faker.internet.password()
    }

    const providerId = {
        providerId: id
    }


    if (type === "Provider") {
        person = { ...person, ...extra }
        return person;
    } else if (type == "Parent") {
        person = { ...person, ...extra, ...providerId }
        return person
    } else if (type === "Child") {
        const birthdate = {
            birthdate: faker.date.birthdate({ min: 1, max: 5, mode: 'age' })
        }

        person = { ...person, ...birthdate, ...providerId }
        return person;
    }
}
//console.log(generatePerson('Child'));

function generatePeople(num, type, id) {

    const peopleArray = [];

    for (var i = 0; i < num; i++) {
        const person = generatePerson(type, id);
        peopleArray.push(Object.values(person))
    }

    return peopleArray;
}

//console.log(generatePeople(3));

module.exports = {
    generatePeople: generatePeople,
    generatePerson: generatePerson
};