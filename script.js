// #1 forEach

let arr = [5, 6, 7, 8, 9];
let sum = 0;
arr.forEach(
    function sumNumber( Value ) {
    sum += Value;
  }
);
console.log(sum);

// #2 Map

let arr2 = [5, 6, 7, 8, 9];
// for (i=0; i<arr2.length; i++) {
//     let newArr = arr2.map(Math.pow(arr2[i], 2));
//     console.log(newArr);
// }
let newArr = arr2.map(function(pow){
    return Math.pow(pow, 2)
});
console.log(newArr);

// #3 Every

let arr3 = [
    {
        name: 'Ivan',
        country: 'Ukraine'
    },

    {
        name: 'Petro',
        country: 'Ukraine'
    },

    {
        name: 'Miguel',
        country: 'Cuba'
    }

];
let check = arr3.every(us => us.country === 'Ukraine');
console.log(check);

// #4 Some

let arr4 = [
    {
        name: 'Ivan',
        country: 'Ukraine'
    },

    {
        name: 'Petro',
        country: 'Ukraine'
    },

    {
        name: 'Miguel',
        country: 'Cuba'
    }

];
let check2 = arr4.some(us => us.country === 'Cuba');
console.log(check2);

// #5 Filter

let arr5 = [1, 'string', [3, 4], 5, [6, 7]];
let newArr5 = arr5.filter(num => num.length >= 1 && num.length < 3);
console.log(newArr5);

// #6.1 Reduce

let arr6 = [1, 2, 5, 0, 4, 5, 6];

let sum6 = arr6.reduce((total, elem) => {
    if (total > 3) return total;
    return total + elem;
}, 0)
console.log(sum6);

// #6.2 Reduce

let arr62 = [1, 2, 3, 0, 4, 5, 6];
let sum62 = arr62.reduce((total, elem, index, array) => {
    if (total >= 10) {
        return total;
    }
    return total + elem;
}, 0)
