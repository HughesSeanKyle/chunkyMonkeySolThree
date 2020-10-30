/* 
Basic Algorithm Scripting: Chunky MonkeyPassed
Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.
*/

//Solution Three
function chunkArrayInGroups(arr, size) {              //1
  // Break it up.
  var newArr = [];                                    //2
  var i = 0;                                          //3

  while (i < arr.length) {                            //4
    // console.log(newArr, '|', i, '|', size, '|');   //4.1
    newArr.push(arr.slice(i, i + size));              //5
    i += size;                                        //6
  }
  return newArr;                                      //7
}

console.log(chunkArrayInGroups(["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"], 3));


//Notes
/*
//1
function which takes in two arguments:
  Arg1 - an Array
  Arg2 - The size input by which to "chunk" the array.

//2
Variable initialized as an empty array

//3
Variable (for iterating) initialized to zero

//4
The while statement creates a loop that executes a specified statement as long as the test condition evaluates to true. The condition is evaluated before executing the statement.
[https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while]

The condition for the while loop is to check that i is less that the array.length (In this scenario 10 & zero based 0 to 9)

//5 && //6
The push() method adds one or more elements to the end of an array and returns the new length of the array.
[https://devdocs.io/javascript/global_objects/array/push]

The slice() method returns a shallow copy of a portion of an array into a new array object selected from begin to end (end not included). The original array will not be modified.

arr.slice([begin[, end]])
[https://devdocs.io/javascript/global_objects/array/slice]

*****console.log figure 4.1*******
                                                                        | i |  Size |  i + size  |
------------------------------------------------------------------------+---+-------+------------+
[]                                                                      | 0 |     3 |       3    |
[ [ 'a', 'b', 'c' ] ]                                                   | 3 |     3 |       6    |
[ [ 'a', 'b', 'c' ], [ 'd', 'e', 'f' ] ]                                | 6 |     3 |       9    |
[ [ 'a', 'b', 'c' ], [ 'd', 'e', 'f' ], [ 'g', 'h', 'i' ] ]             | 9 |     3 |       12   |
------------------------------------------------------------------------+---+-------+------------+
[ [ 'a', 'b', 'c' ], [ 'd', 'e', 'f' ], [ 'g', 'h', 'i' ], [ 'j' ] ]    | <<<=== Final Output |

__slice method visualized__

["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"]
[ 0            | 3] => First iteration stops here

["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"]
                [3            | 6] => Second iteration stops here

["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"]
                               [6            | 9] => third iteration stops here


Last iteration only has 'j'


As seen by figure 4.1 the slice method will start at 0 and will end at size input(3 in this scenario). This slice (or chunk) will then be pushed to the newArr variable (previously initialized as an empty array). 'i' will then keep incrementing at the rate of the size input at the end of each iteration. This incrementation makes it possible for the arguments in the slice method to create new "chunks" on each iteration.

//7
This line will return the newArr variable with a final output of:
[ [ 'a', 'b', 'c' ], [ 'd', 'e', 'f' ], [ 'g', 'h', 'i' ], [ 'j' ] ]

*/