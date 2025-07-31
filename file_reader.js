const { json } = require("stream/consumers");

const fs = require("fs").promises;

// THEN-CATCH SOLUTION BELOW THIS LINE

fs.readFile('./firstname.txt', 'utf-8')
    .then(firstname => {
        return fs.readFile('./lastname.txt', 'utf-8')
            .then(lastname => {
                return { firstname, lastname }
            })
    })
    .then(({ firstname, lastname }) => {
        return fs.readFile('./age.txt', 'utf-8')
            .then(age => {
                return { firstname, lastname, age }
            })
    })
    .then(({ firstname, lastname, age }) => {
        return fs.readFile('./hobbies.txt', 'utf-8')
            .then(hobbies => {
                return { firstname, lastname, age, hobbies }
            })
    })
    .then(({ firstname, lastname, age, hobbies }) => {
        hobbie1 = JSON.parse(hobbies)[0]
        hobbie2 = JSON.parse(hobbies)[1]

        console.log(`${firstname} ${lastname} is ${age} years old and his hobbies are ${hobbie1} and ${hobbie2}`)
    })
    .catch(err => {
        console.error(err)
    })

// ASYNC/AWAIT SOLUTION BELOW THIS LINE
async function readFiles() {
    try {
        const getFirstname = await fs.readFile('./firstname.txt', 'utf-8')
        const getLastname = await fs.readFile('./lastname.txt', 'utf-8')
        const getAge = await fs.readFile('./age.txt', 'utf-8')
        const getHobbies = await fs.readFile('./hobbies.txt', 'utf-8')
        const getHobbie1 = await JSON.parse(getHobbies)[0]
        const getHobbie2 = await JSON.parse(getHobbies)[1]

        console.log(`${getFirstname} ${getLastname} is ${getAge} years old and his hobbies are ${getHobbie1} and ${getHobbie2}`)
    } catch (err) {
        console.error(err)
    }
}

readFiles()