const findTheOldest = function(people) {
    const oldestPerson = people.reduce((currentOldest, newPerson, index) => {
        if (`yearOfDeath` in newPerson == false) {
            // they're still living
            const date = new Date();
            newPerson.yearOfDeath = date.getFullYear();
        }
        let currentOldestAge = currentOldest.yearOfDeath - currentOldest.yearOfBirth;
        let newPersonAge = newPerson.yearOfDeath - newPerson.yearOfBirth;

        if (currentOldestAge > newPersonAge) {
            return currentOldest;
        }

        return newPerson;
     }, {})
    
    return oldestPerson
};

// Do not edit below this line
module.exports = findTheOldest;
