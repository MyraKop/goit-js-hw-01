// function getElementWidth(content, padding, border) {
//     let totalWidth = Number.parseFloat(content) + (Number.parseFloat(padding) * 2) + (Number.parseFloat(border) * 2)
//     return totalWidth
// }

// console.log(getElementWidth("50px", "8px", "4px"));
// console.log(getElementWidth("60px", "12px", "8.5px"));
// console.log(getElementWidth("200px", "0px", "0px"));



// function checkForSpam(message) {
//    if (message.toLowerCase().includes("spam") || message.toLowerCase().includes("sale")) {
//        return true;
//    } else {
//        return false;
//    }
// }


// console.log(checkForSpam("Latest technology news")); // false
// console.log(checkForSpam("JavaScript weekly newsletter")); // false
// console.log(checkForSpam("Get best sale offers now!")); // true
// console.log(checkForSpam("Amazing SalE, only tonight!")); // true
// console.log(checkForSpam("Trust me, this is not a spam message")); // true
// console.log(checkForSpam("Get rid of sPaM emails. Our book in on sale!")); // true
// console.log(checkForSpam("[SPAM] How to earn fast money?")); // true



// function filterArray(numbers, value) {
//     const newNumbers = [];
//     for (const number of numbers) {
//        if (number > value) {
//         newNumbers.push(number)
//        } 
//     } return newNumbers
// }

// console.log(filterArray([1, 2, 3, 4, 5], 3)); // [4, 5]
// console.log(filterArray([1, 2, 3, 4, 5], 4)); // [5]
// console.log(filterArray([1, 2, 3, 4, 5], 5)); // []
// console.log(filterArray([12, 24, 8, 41, 76], 38)); // [41, 76]
// console.log(filterArray([12, 24, 8, 41, 76], 20)); // [24, 41, 76]