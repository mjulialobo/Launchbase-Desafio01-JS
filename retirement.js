const name = "Marcelo";
const gender = 'M';
const age = 65;
const contribution = 35;

const rule = age + contribution;

//rules of retiment
const manRetires = gender == 'M' && contribution >= 35 && rule >= 95
const womanRetires = gender == 'F' && contribution >= 30 && rule >= 85

if (manRetires || womanRetires) {
    console.log(`${name}, you can retire!`)
} else {
    console.log(`${name}, you cannot retire.`)
}