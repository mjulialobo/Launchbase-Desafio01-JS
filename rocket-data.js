const user = {
    name: "Rocketseat",
    color: "purple",
    focus: "development",
    adress: {
        street: "street Guilherme Gembala",
        number: 260
    }
}

//gives information back
console.log(`The company ${user.name} is located in
${user.adress.street}, ${user.adress.number} and its color is ${user.color}.`)