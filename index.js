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
inventory.unshift(25);
console.log(inventory);
// d
inventory.shift();
console.log(inventory);
inventory.splice(1, 1, 25,35);
console.log(inventory);
// exercise 3: shallow copying of arrays and the reference trap
// a
const originalScores = [90, 85, 78];
// b
const referenceCopy = originalScores;
console.log(originalScores);
// c
referenceCopy[0] = 100;
console.log("originalScores:", originalScores);
// d
const spreadCopy = [...originalScores];
spreadCopy[1] = 50;
console.log("originalScores:", originalScores);
console.log("spreadCopy:", spreadCopy);
// Section B: Searching and checking
// Exercise 4: finding elements by index and value
const students = ["Alice", "Bob", "Charlie", "Alice", "David"];
// a
console.log(students.indexOf("Alice")); // Output: 0
// b
console.log(students.lastIndexOf("Alice")); // Output: 3
// c
console.log(students.indexOf("Eve")); // Output: -1
// d
console.log(students.includes("Bob")); 
// e
console.log(students.includes("Eve"));
// exercise 5: Advanced searching with find and findIndex
const products = [
  { id: 1, name: "Laptop", price: 999 },
  { id: 2, name: "Phone", price: 599 },
  { id: 3, name: "Tablet", price: 299 },
  {id : 4, name: "Headphones", price: 199}
];
// a
let foundProduct = products.find(product => product.id === 2);
console.log(foundProduct);