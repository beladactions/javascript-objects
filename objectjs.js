/*
=======
OBJECTS
=======

Objects are collections of unordered properties which could be a variable/string value,
These named values are properties of the objects.
Unlike strings, objects are mutable
*/

// Declare the name of the object, then give it a property with the object literal ({})

let person = {
    name: "Beloved",
    age: 25,
    gender: "male",
    email: "belovedadejuyigbe@gmail.com"
  
  };

  console.log(person)

  // Declare the name of the object, then give it a property with the object constructor syntax

let person = new Object();
    person.name = "Beloved";
    person.age = 25;
    person.gender = "male";
    person.email = "belovedadejuyigbe@gmail.com";

console.log(person)

/*
==================
OBJECTS PROPERTIES
==================

Objects are dynamic in javascript, we can going to perform some operations

=================
ADDING PROPERTIES
=================
*/

let person = {
    name: "Beloved",
    age: 25
  };

  console.log(person)
  
  person.gender = "male";
  person.email = "belovedadejuyigbe@gmail.com";

  console.log(person)


  /*
  =================
  MODIFYING OBJECTS
  =================
*/

let person = {
    name: "Beloved",
    age: 25,
    gender: "male",
    email: "belovedadejuyigbe@gmail.com" 
    
  };
  
  person.age = 26
 
  console.log(person)

  /*
  ===================
  DELETING PROPERTIES
  ===================
*/

  let person = {
  name: "Beloved",
  age: 25,
  gender: "male"
};

delete person.gender;

console.log(person)


/*
===============
OBJECTS METHODS
===============

Object Methods are functions stored as object properties
These are actions that can be performed on objects

*/

let person = {
    name: "Beloved",
    age: 25,
    greet: function() {
      console.log("Hello, my name is " + this.name);
    }
  };
  
  person.greet(); 

  /*

  ==================
  DISPLAYING OBJECTS
  ==================
*/

  const person = {
    name: "Beloved",
    age: 25,
    city: "Nigeria"
  };
  
  const myArray = Object.values(person);

  console.log(myArray)




  

  




  
  
