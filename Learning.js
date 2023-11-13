/* This is how you create
multi line comments */

// This is how you create single line comments

/* 
Javascript provides 8 different data types:
// sss
1. undefined
2. null
3. boolean
4. string
5. symbol
6. bigint
7. number
8. object

Variables allow for the storage of these data types, they do this via labels pointing to the data
as opposed to using the data itself

*/

var dogggger = 2;
// just some new code for testing git

// Creating a variable
// dhsgfsdhjfhksj
var myFirstVariable;
myFirstVariable = 5;

// You can also make variables equivalent to other variables

var myFirstVariableClone;
myFirstVariable = myFirstVariableClone;

// You can also intialize variable values in the same line
var dog = 2;
var dogName = "wroofus";

// You can change them further though
var DogAge = 5;
DogAge = DogAge + 1; // Now DogAge is 6

// Remember all variables and function names are case sensitive
// Most programmers use something called camelCase

/* Don't forget to update code in the variable area as well as your
 current working area */

 /* one of the problems with "var" is that it is easily overwritten
eg: */

var blackDogName = "Rusty";
var blackDogName = "Herald";

// so now the computer thinks the black dog's name is Herald
// at a larger scale this becomes important to remember
// so we can use other things instead like "let"

let whiteDogName = "Busta";
let whiteDogName = "Roofington";
// so line 57 and 58 now get errors

// "const" is also useful for this - once you assign with "const"
// it cannot be changed

const yellowLabName = "Busta";
const yellowLabName = "Jerry";

// errors again when trying to reassign variable, nice

/* As a side note, developers often use all caps when declaring
immutable variables and then camelCase for variables that will be
changed - like objects, arrays, other mutable values */

