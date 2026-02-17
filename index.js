// erxercise 1: Arrays initianilization and property access//
const productcategories = ["Books", "Electronics", "Clothing", "Home & Kitchen", "toys & Games"];
// a
console.log(productcategories[0]); // Output: Electronics
// b
console.log(productcategories[productcategories.length -1]); // Output: toys & Games
// c
console.log(productcategories.length); // Output: 5
// d
productcategories[1] = "Sports & Outdoors";
console.log(productcategories); // Output: ["Books", "Sports & Outdoors", "Clothing", "
// e
console.log(productcategories[2]); // Output: Clothing
//  errcise 2: Push , Pop, Shift, unshift, Splice
let inventory =[10,20,30];
// a
inventory.push(40);
console.log(inventory);
// b
inventory.pop();
console.log(inventory);
// c
inventory.unshift(5);
console.log(inventory);
// d
inventory.shift();
console.log(inventory);