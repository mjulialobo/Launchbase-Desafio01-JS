const users = [{
        name: "Salvio",
        revenue: [115.3, 48.7, 98.3, 14.5],
        expenses: [85.3, 13.5, 19.9]
    },
    {
        name: "Marcio",
        revenue: [24.6, 214.3, 45.3],
        expenses: [185.3, 12.1, 120.0]
    },
    {
        name: "Lucia",
        revenue: [9.8, 120.3, 340.2, 45.3],
        expenses: [450.2, 29.9]
    }
];

// calculate the balance by subtracting expenses from revenue
function calculateBalance(revenue, expenses) {
    const addRevenue = addNumbers(revenue)
    const addExpenses = addNumbers(expenses)

    return addRevenue - addExpenses
}

// calculate the sum of revenue and expense arrays within the calculateBalance function
function addNumbers(numbers) {
    let add = 0
    for (let number of numbers) {
        add = add + number
    }
    return add
}

// // assigns the balance value of each user and informs if it is positive or negative

for (let user of users) {
    const balance = calculateBalance(user.revenue, user.expenses)

    if (balance > 0) {
        console.log(` ${user.name} has a POSITIVE balance of ${balance.toFixed(2)}`)
    } else {
        console.log(` ${user.name} has a NEGATIVE balance of ${balance.toFixed(2)}`)
    }
}
//to.fixed serves to restrict the number of decimal places