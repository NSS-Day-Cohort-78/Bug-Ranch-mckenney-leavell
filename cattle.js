const { database } = require("./database.js")

const roundup = (herdSize) => {
    // const cattle = []
    let cattle = []
    const types = database.cattleTypes
    //changed counter<size to counter<herdSize
    for (let counter = 0; counter < herdSize; counter++) {
        const randomType = Math.floor(Math.random() * types.length)
        //change from types[randomType]
        const animal = types[randomType].breed
        cattle.push(animal)
    }

    return cattle
}

module.exports = { roundup }