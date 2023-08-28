const { faker } = require('@faker-js/faker');


const myEmail = faker.location.streetAddress()


function generatePerson(type = "Child") {
    let person = {
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName()
    }


    if (type === "Provider" || type === "Parent") {

        const phoneNumber = {
            phoneNumber: faker.phone.number()
        }

        const username = {
            username: faker.internet.userName({
                firstName: person.firstName, lastName: person.lastName
            })
        }

        const email = {
            email: faker.internet.email({ firstName: person.firstName, lastName: person.lastName })
        }

        person = { ...person, ...username, ...phoneNumber, ...email }
        return person;
    } else if (type === "Child") {

        const birthDate = {
            birthDate: faker.date.birthdate({ min: 1, max: 5, mode: 'age' })
        }

        person = { ...person, ...birthDate }
        return person;
    }
}
console.log(generatePerson('Child'));

function generatePeople(num) {

    const peopleArray = [];

    for (var i = 0; i < num; i++) {
        const person = generatePerson();
        peopleArray.push(Object.values(person))
    }

    return peopleArray;
}

//console.log(generatePeople(3));

module.exports = {
    generatePeople: generatePeople
};