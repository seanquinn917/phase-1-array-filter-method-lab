// const { arrayContaining } = require("expect");

// function findMatching(drivers, name){
//     let newArray = [];

//         for(const user of drivers){
//             if (name === ["name"]) {
//                 newArray.push([name]);
//             }
//         }
//         return newArray
// }


// array.filter(drivers, item){
//     let newArray = [];
//     for(let item of array){
//         if(item === ["name"])
//         return item
//     }
// }


// ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']
function findMatching(array, string){
    let newArray = array.filter(name => string.toUpperCase() === name.toUpperCase())
    return newArray
}

// function findMatching(array,string){
//     let newArray = []
//     for(const user of array){
//         if(filter.array(user)){
//             return user
//         }
//     }
// }



function fuzzyMatch(array, string){
    let newArray = array.filter(name => string.charAt() === name.charAt())
    return newArray
}




function matchName(array, string){
    let newObj = array.filter(obj => obj.name === string)
    return newObj
}