// Code your solution here

function findMatching(drivers, string) {
    return drivers.filter(function(drivers){
        return drivers.toLowerCase() === string.toLowerCase()
    })
}

function fuzzyMatch(drivers, string) {
    return drivers.filter(function(drivers){
        return drivers.slice(0, string.length) === string
    })
}

function matchName(drivers, string) {
    return drivers.filter(function (drivers){
        return drivers.name === string
    })
}