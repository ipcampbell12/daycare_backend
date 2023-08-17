
const arr1 = ['first_name', 'last_name', 'age'];
const arr2 = ['Ian', 'Campbell', 33];


function createArr(a1, a2) {
    const arrOfArrs = []

    for (let i = 0; i < a1.length; i++) {
        arrOfArrs.push([a1[i], a2[i]])
    };

    return arrOfArrs;

};

//console.log(createArr(arr1, arr2));


module.exports = {
    createArr: createArr
}