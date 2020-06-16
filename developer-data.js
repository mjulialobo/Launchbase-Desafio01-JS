const developer = {
    name: "Pedro",
    age: 25,
    technology: [
        { name: "C++", specialty: "Desktop" }, { name: "JavaScript", specialty: "web and mobile" }
    ]
}

console.log(`${developer.name}, has ${developer.age} years, 
and uses ${developer.technology [1].name} for
${developer.technology [1].specialty} development. `)