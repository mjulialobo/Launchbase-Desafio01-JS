//usuários
const users = [
    { name: 'Carlos', technologies: ['HTML', 'CSS'] },
    { name: 'Jasmine', technologies: ['JavaScript', 'CSS'] },
    { name: 'Tauane', technologies: ['HTML', 'Node.js'] },
    { name: 'Pedro', technologies: ['Java', 'Python'] }
];

//for (let user of users) {
//    console.log(`${user.name} works with ${user.technologies} `)
//}

// search technology
// scroll through the array until it finds if it uses CSS
function checkIfUsesCSS(users) {
    for (technology of users.technologies) {
        if (technology == 'CSS')
            return true
    }
    return false
}
// find CSS and return phrase

for (let i = 0; i < users.length; i++) {
    const userWorksWithCSS = checkIfUsesCSS(users[i])
    if (userWorksWithCSS) {
        console.log(` ${users[i].name} works with CSS`)
    }

}