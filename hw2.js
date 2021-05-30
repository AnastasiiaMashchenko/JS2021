// ex 1

let age = "19"; 

let condition = (age >=18) || (age <=90);

const ternarCondition = condition ? true : false;

console.log(ternarCondition);

//ex 2

let userName = prompt('What is your name');
alert = (`Hi ${userName}`);
let birthday = prompt ('When did you born');
let age = 2021 - birthday;
alert = ('You are ' + age + ' years ols');

//ex 3

let num = 2;
if (num < 60) {
     console.log(`current number ${num} equal to letter 'F'`);
}
    else if (num < 70) {
        console.log(`current number ${num} equal to letter 'D'`);
    }
    else if (num < 80) {
        console.log (`current number ${num} equal to letter 'C'`)
    }
    else if (num < 90) {
        console.log (`current number ${num} equal to letter 'B'`)
    }
    else if (num < 100) {
        console.log (`current number ${num} equal to letter 'A'`)
    }
else {
    (`current number ${num} not equal to any letter`)
}

// ex 4

let language = 'chinese or mandarin';
    switch (language) {
        case 'chinese or mandarin':
            console.log('MOST number of native speakers!');
            break;
        case 'spanish':
            console.log('MOST number of native speakers!');
            break;
        case 'english':
            console.log('3rd place');
            break;
        case 'hindi':
            console.log('Number 4');
            break;
        case `arabic`:
            console.log('5th most spoken language');
            break;
        default:
            console.log('Great language too :D');
    }