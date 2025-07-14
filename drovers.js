const { database } = require("./database.js")

//problem: herdSize defined but not called
const hireDrovers = (herdSize) => {
    // original: const drovers = []
    let drovers = []
    const allDrovers = database.drovers
    // original: const numberNeeded = cattleToDrive / 10
    numberNeeded = herdSize / 10

    for (let counter = 0; counter < numberNeeded; counter++) {
        const randomHerderId = Math.floor(Math.random() * allDrovers.length)
        drovers.push(allDrovers[randomHerderId])
    }

    //adding return line
    return drovers

}

module.exports = { hireDrovers }