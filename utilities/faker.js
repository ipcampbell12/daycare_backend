const { faker } = require('@faker-js/faker');


const myEmail = faker.location.streetAddress()


function generatePerson(type) {
    let person = {
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName()
    }


    if (type === "Provider" || "Parent") {


        const username = {
            username: faker.internet.userName({
                firstName: person.firstName, lastName: person.lastName
            })
        }
        const email = {
            email: faker.internet.email({ firstName: person.firstName, lastName: person.lastName })
        }

        person = { ...person, ...username, ...email }
        return person
    } else {

    }






    return updatedPerson;


}

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