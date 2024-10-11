// function musbatToqlar(massiv) {
//     return massiv.filter(num => num > 0 && num % 2 !== 0);
// }

// console.log(musbatToqlar([3, -1, 2, -5, 7, 0, 5, -8]));


// function mosElementlar(massiv1, massiv2) {
//     return massiv1.filter(num => massiv2.includes(num));
// }

// console.log(mosElementlar([1, 2, 3, 4, 4, 5], [3, 4, 5, 6]));

// function hammasiManfiymi(massiv) {
//     return massiv.every(num => num < 0);
// }

// console.log(hammasiManfiymi([-1, -3, -5]));

// function qiymatniOchirish(massiv, qiymat) {
//     for (let i = 0; i < massiv.length; i++) {
//         if (massiv[i] === qiymat) {
//             massiv.splice(i, 1);
//             break;
//         }
//     }
//     return massiv;
// }
// console.log(qiymatniOchirish([10, 20, 30, 40], 30)); 


// function yarmlardanElement(massiv) {
//     const yarim = Math.floor(massiv.length / 2); 
//     return [massiv[0], massiv[yarim]]; 
// }

// console.log(yarmlardanElement([10, 20, 30, 40]));