const findTheOldest = function(people) {
    return people.reduce((obj, item) => {
        let prevAge = 0;
        if ('yearOfDeath' in obj) prevAge = obj.yearOfDeath - obj.yearOfBirth;
        else prevAge = (new Date().getFullYear()) - obj.yearOfBirth;

        let newAge = 0;
        if ('yearOfDeath' in item) newAge = item.yearOfDeath - item.yearOfBirth;
        else newAge = (new Date().getFullYear()) - item.yearOfBirth;

        if (prevAge < newAge) return item;
        return obj;
    }, people[0]);
};

// Do not edit below this line
module.exports = findTheOldest;
