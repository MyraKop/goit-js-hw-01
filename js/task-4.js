// Modul 2
// function getShippingCost(country) {
//     let message;
//     switch (country) {
//         case "China":
//             message = `Shipping to ${country} will cost 100 credits`
//             break;
//         case "Chile":
//             message = `Shipping to ${country} will cost 250 credits`
//             break;
//         case "Australia":
//             message = `Shipping to ${country} will cost 170 credits`
//             break;
//         case "Jamaica":
//             message = `Shipping to ${country} will cost 120 credits`
//             break;
//         default:
//             message = "Sorry, there is no delivery to your country"
//     } return message;
// }


// console.log(getShippingCost("Australia")); // "Shipping to Australia will cost 170 credits"
// console.log(getShippingCost("Germany")); // "Sorry, there is no delivery to your country"
// console.log(getShippingCost("China")); // "Shipping to China will cost 100 credits"
// console.log(getShippingCost("Chile")); // "Shipping to Chile will cost 250 credits"
// console.log(getShippingCost("Jamaica")); // "Shipping to Jamaica will cost 120 credits"
// console.log(getShippingCost("Sweden")); // "Sorry, there is no delivery to your country"

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4.7,
//   price: 5000,
//   tags: ["premium", "promoted", "top", "trusted"],
//   owner: {
//     name: "Henry Sibola",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };

// apartment.area = 60;
// apartment.rooms = 3;
// apartment.location = [];
// apartment.location.push(country, city)

// console.log(apartment.area);
// console.log(apartment.rooms);
// console.log(apartment.location);


// function calculateTotalPrice(productName) {
//   const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
//   ];

//   let totalPrice = 0;

//   for (let product of products) {
//     if (product.name === productName) {
//       totalPrice = product.price * product.quantity;
//       return totalPrice;
//     }
//   } 
//   return `Product ${productName} not found`;   
// }


// console.log(calculateTotalPrice("Blaster"))
