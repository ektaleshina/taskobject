//7.7.1
const person = { 
    name: "John",
    age: 12
};

function printInfo() {
    console.log(`Name: ${this.name}, Age: ${this.age}`);
}

printInfo.call(person);



//7.7.2
function calculate(a, b, operator) {
    if (operator === 'add') {
        return a + b;
    } else if (operator === 'subtract') {
        return a - b;
    } else if (operator === 'multiply') {
        return a * b;
    }else if (operator === 'divide') {
        return a / b;
    }

    return 0;
}

const obj = {
    a: 22,
    b: 2,
    operator: 'add'
};

const result = calculate.apply(obj, [2, 3, 'add']);
console.log(result);

//7.7.3
const users = [
    { name: "Rey", age: 21 },
    { name: "Raya", age: 25 },
    { name: "Lord", age: 40 },
];

const filteredUsers = users.filter((user) => {
    return user.age > 18; 
});

console.log(filteredUsers);

const filteredUsersName = users.filter((user) => {
    return user.name; 
});

console.log(filteredUsersName);

//7.7.4
const person = { 
    name: "John",
    fullName: "Watson"
};

function setFullName(obj, str) {
    obj.fullName = str;
}
  
const setPersonFullName = setFullName.bind(null, person);
  
setPersonFullName("John Smith");
  
console.log(person.fullName);

//7.7.5
const arr = [3, 6, 6, 4, 7, 7];
function unSorted(arr) {
    const un = arr.filter((item, index)) => arr.indexOf(item === index);
    const sortGr = un.sort((a,b) => a - b);
    return sortGr;
}
 const unSortedGr = unSorted(arr);
 console.log(unSortedGr);