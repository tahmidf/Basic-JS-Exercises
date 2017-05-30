/* ---------------------------

*** #1 Area of Rectangle ***

Write a JavaScript function to calculate the area of a rectangle given the length and width.

Test:
console.log(areaRectangle(10, 20));

Output:
200

 --------------------------- */

function areaRectangle(length, width) {
  return length*width;
}
console.log("Rectangle Area Calculator:");
console.log(areaRectangle(10,20));
/* Uncomment the following to check */
   //console.log(areaRectangle(2, 7));
   //console.log(areaRectangle(20, 56.5));
  // console.log(areaRectangle(50, 34));




/* ---------------------------

*** #2 Rotate String ***

Rotate a given string in the right direction by periodically removing
one letter from the end of the string and attaching it to the front.

Test:
rotateString("cat");

Output:
cat
tca
atc
cat

HINT: Use substring()
 --------------------------- */

function rotate_string(text) {
  for (var i=0;i<text.length-1 ; i++)
  {
     text = text[text.length-1] + text.substring(0,text.length-1);
  }

  console.log(text);
}

console.log("Rotate String:");
/* Uncomment the following to check */
  rotate_string("tahmid");
  //rotate_string("voracious")




/* ---------------------------

*** #3 Hide part of email address ***

Write a JavaScript function to hide email addresses to protect from unauthorized user.

Test:
console.log(protect_email("tom_jenkins@example.com"));

Output:
"tom_j...@example.com"

HINT: Use split() and substring()

 --------------------------- */

function protect_email(email) {
  var temp = email.split('@');
  var size = temp[0].length;
  var temp3= email.substring(0,size/2);
  var temp2 = email.substring(size,email.length);
  temp = temp3 + '....' + temp2;

  return temp;
}

console.log("Protected email:");
/* Uncomment the following to check */
  console.log(protect_email("harry_potter@gmail.com"));
  console.log(protect_email("sarah.connor@gmail.com"));



/* ---------------------------

*** #4 Alphabetical Order ***

Write a JavaScript function that returns a passed string with letters in alphabetical order.

Test:
console.log(alphabetic_order('webmaster'));

Output:
abeemrstw

HINT: Use join(), split() and sort() functions
 --------------------------- */

function alphabetic_order(word) {
  var splitting = word.split("");
  var temp = splitting.sort();
  var final = temp.join('');
  return final;
}

  console.log('Spliited Word');
/* Uncomment the following to check */
   console.log(alphabetic_order("webmaster"));




/* ---------------------------

*** #5 Remove Duplicate Values ***

Write a JavaScript program to find and remove duplicate values in a JavaScript array.

Test:
remove_duplicates([3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]);

Output:
[3, 'a', 2, 4, 9]

 --------------------------- */

function remove_duplicates(arr) {

  console.log("Duplicates removed from array");
}

console.log("Remove Duplicate Values:");
/* Uncomment the following to check */
  // remove_duplicates([3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]);


/* ---------------------------

*** #6 Dash between Even Numbers ***

Write a JavaScript program which accepts a number as input and inserts dashes (-) between two consecutive even numbers.

Test:
dash_in_even(012345684);

Output:
"012-456-8-4"

 --------------------------- */

function dash_in_even(number) {
  for(var i=0; i<number.length; i++)
  {
    if(number[i]%2==0)
    {
      var temp = number.substring(0,i);
      number = temp+'_';
    }
  }
  console.log(number);
}

console.log("Dash between Even Numbers:");
/* Uncomment the following to check */
   dash_in_even(100);
  // dash_in_even(1356);
  // dash_in_even(246824);
  // dash_in_even(1324567824);


/* ---------------------------

*** #7 Guessing Game ***

Write a JavaScript program where the program takes a random integer between 1 to 10,
the user is then prompted to input a guess number. If the user input matches with guess number,
the program will display a message "Good Work" otherwise display a message "Not matched"

HINT: Use Math.ceil() and Math.random()

 --------------------------- */

function guessing_game(guess) {
  // Get a random integer from 1 to 10 inclusive
  console.log("matched or unmatched?");
}

console.log("Guessing Game:");
/* Uncomment the following to check */
  // var guess = prompt('Guess the number between 1 and 10 inclusive');
  // console.log("User guessed: "+ guess);
  // guessing_game(guess);
