

/*

let year;
console.log(typeof year);

year = 1987;

console.log(typeof year);

const year = 2021;
const ageZhoey = year - 2016;
const ageHope = year - 2018;
console.log(ageHope, ageZhoey);

console.log(ageHope * 2, ageZhoey / 10, 2 ** 3);


const firstName = 'carlo';
const lastName = 'bernabe';
console.log(firstName + ' ' + lastName);

let xx = 10 + 4;
xx += 10; //x = x +10
xx *= 4; //x = x * 4
xx++;
alert(xx)

console.log(ageZhoey < ageHope);
console.log(ageHope >= 5);

console.log(year - 2016 > year - 2018);

let x, y;

x = y = 25 - 10 - 5;
console.log(x, y);

const averageAge = (ageHope + ageZhoey) / 2;
console.log(ageZhoey, ageHope, averageAge);





const firstName = 'kaloy'
const job = 'standby azzurro'
const birthYear = 1987;
const currentYr = 2021


const kaloy = "i'm " + firstName + ', a ' + (currentYr - birthYear) + 'years old' + '!';

console.log(kaloy);
const newK = `I'm ${firstName}, a ${currentYr - birthYear} year old ${job}!`;
console.log(newK);

console.log('String with \n\ multiple \n\ lines');

//USING \n\

console.log(`String with
multiple 
lines`);




const age = 15;

if (age >= 18) {
    console.log('cha can have sex with me!')
}

else {
    const yearsLeft = 18 - age;
    console.log(`she can just suck my cock. wait another ${yearsLeft} years :p`);
}

*/

//BMI CALCULATOR BASIC
const heightMarkA = 1.69;
const heightJohnA = 1.95;
const weightMarkA = 78;
const weightJohnA = 92;

const heightMarkB = 1.88;
const heightJohnB = 1.76;
const weightMarkB = 95;
const weightJohnB = 85;




bmiMA = weightMarkA / (heightMarkA) ** 2;
bmiJA = weightJohnA / (heightJohnA) ** 2;
console.log('mark BMI is ' + bmiMA);
console.log('john BMI is ' + bmiJA);

let markHigherBMIA = bmiMA > bmiJA;
console.log("Is mark's BMI Higher tha john? " + markHigherBMIA);

bmiMB = weightMarkB / (heightMarkB) ** 2;
bmiJB = weightJohnB / (heightJohnB) ** 2;
console.log('mark BMI is ' + bmiMB);
console.log('john BMI is ' + bmiJB);

let markHigherBMIB = bmiMB > bmiJB;
console.log("Is mark's BMI Higher tha john? " + markHigherBMIB);



//BMI CALCULATOR BASIC
const heightMarkA = 1.69;
const heightJohnA = 1.95;
const weightMarkA = 78;
const weightJohnA = 92;

const heightMarkB = 1.88;
const heightJohnB = 1.76;
const weightMarkB = 95;
const weightJohnB = 85;




bmiMA = weightMarkA / (heightMarkA) ** 2;
bmiJA = weightJohnA / (heightJohnA) ** 2;
console.log('mark BMI is ' + bmiMA);
console.log('john BMI is ' + bmiJA);

let markHigherBMIA = bmiMA > bmiJA;
console.log("Is mark's BMI Higher tha john? " + markHigherBMIA);

bmiMB = weightMarkB / (heightMarkB) ** 2;
bmiJB = weightJohnB / (heightJohnB) ** 2;
console.log('mark BMI is ' + bmiMB);
console.log('john BMI is ' + bmiJB);

let markHigherBMIB = bmiMB > bmiJB;
console.log("Is mark's BMI Higher tha john? " + markHigherBMIB);

//5 falsy values: 0, '',undefined, null, NaN

const money = 20;

if (money) {

    console.log("dont buy expensive things");
}
else {
    console.log('you should get a new job!');
}



const age = prompt("How old are you?");

if (age == 18) {
    console.log('i can fuck her right now!');
}

else {
    console.log(`OH no! she is ${age} i'm going to jail`)
}

*/


const t1s1 = Number(prompt('Team 1 Score 1:'));
const t1s2 = Number(prompt('Team 1 score 2:'));
const t1s3 = Number(prompt('Team 1 score 3:'));
const avgScoreT1 = (t1s1 + t1s2 + t1s3) / 3;

console.log(`Dolphins Score is: ${avgScoreT1}`);

const t2s1 = Number(prompt('Team 2 Score 1:'));
const t2s2 = Number(prompt('Team 2 score 2:'));
const t2s3 = Number(prompt('Team 2 score 3:'));
const avgScoreT2 = (t2s1 + t2s2 + t2s3) / 3;

console.log(`Koalas Score is: ${avgScoreT2}`);


if (avgScoreT1 >= 100 && avgScoreT1 > avgScoreT2) {
    console.log(`Dolphins WIN! with a avg score of ${avgScoreT1}`)
}
else if (avgScoreT2 >= 100 && avgScoreT2 > avgScoreT1) {
    console.log(`Koalas WIN! with a avg score of ${avgScoreT2}`)
}
else if (avgScoreT1 === avgScoreT2) {
    console.log(`its a DRAW with both teams avg score of ${avgScoreT1} and ${avgScoreT2}`)
}

else {
    console.log('No one WINS! score is below 100')
}
