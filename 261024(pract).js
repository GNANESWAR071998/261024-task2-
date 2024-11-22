// 1. Simple Array of Fruits

var fruits = ["Apple", "Banana", "Cherry"];
console.log(fruits[0]); 

// Output: 'Apple'



// 2. Add an Element to an Array

var colors = ["Red", "Green", "Blue"];
colors.push("Yellow");
console.log(colors); 

// Output: ["Red", "Green", "Blue","Yellow"]



// 3. Iterate Through an Array

var animals = ["Dog", "Cat", "Elephant"];
for (var i = 0; i < animals.length; i++) {
  console.log(animals[i]);
}

// Output: Dog
        // Cat
        // Elephant




// 4. Access Object Properties

var person = { name: "John", age: 30, city: "New York" };
console.log(person.name); 

// Output: 'John'





// 5. Add a New Property to an Object

var car = { make: "Toyota", model: "Camry" };
car.year = 2022;
console.log(car); 

// Output: { make: "Toyota", model: "Camry", year:2022 }



// 6. Array Length Check
var numbers = [1, 2, 3, 4, 5];
if (numbers.length > 3) {
  console.log("Array has more than 3 elements.");
}

// Output:'Array has more than 3 elements'





// 7. Check if an Array Contains an Element

var colors = ["Red", "black", "Blue"];
if (colors.includes("Green")) {
  console.log("Green is in the array.");
}

// Output: Green is in the array





// 8. Combine Two Arrays

var arr1 = [1, 2, 3];
var arr2 = [4, 5, 6];
var combined = arr2.concat(arr1);
console.log(combined);

// Output: [1, 2, 3, 4, 5, 6]





// 9. Check if an Object Has a Property

var student = { name: "Alice", age: 22 };
if ("age" in student) {
  console.log("Age is a property of student.");
}

// Output: Age is property of student




// 10. Simple Array Sorting

var scores = [20, 10, 40, 30];
scores.sort();
console.log(scores); 

// Output: [10,20,30,40]






// Slightly Tricky Snippets:

// 11. Nested Array Access

var matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];
console.log(matrix[1][1])

// Output: 5




// 12. Nested Object Access

var user = {
  name: "Mark",
  address: {
    city: "Los Angeles",
    zip: 90001
  }
};
console.log(user.address.city);


// Output: Los Angeles





// 13. Loop Through an Object's Properties

var book = { title: "1984", author: "George Orwell", year: 1949 };
for (var key in book) {
  console.log(key + ": " + book[key]);
}

// (or)

console.log(key)

// Output: title
        // author
        // year




// 14. Filtering an Array

var numbers = [5, 10, 15, 20];
var filtered = numbers.filter(function(number) {
  return number > 10;
});
console.log(filtered); 

// Output: [15, 20]






// 15. Removing the Last Element of an Array

var fruits = ["Apple", "Banana", "Cherry"];
var lastFruit = fruits.pop();
console.log(fruits); 
console.log(lastFruit);

// Output: ['Apple','Banana']
// Output: "Cherry"





// 16. Convert Object Values to Array

var car = { make: "Toyota", model: "Camry", year: 2022 };
var carValues = Object.values(car);
console.log(carValues); 

// Output: 2022



// 17. Convert Array to String

var letters = ["A", "B", "C"];
var string = letters.join("-");
console.log(string);

// Output: "A-B-C"
