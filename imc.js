const name = "Carlos";
const weight = 85;
const height = 1.88;

const imc = weight / (height * height);


if (imc >= 30) {
    console.log(`${name}, you are over weight.`)
} else {
    console.log(`${name}, you are not over weight.`)
}

console.log(imc)