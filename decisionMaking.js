// This exercise file is a little different from the others you have seen so far. Read carefully!
// Below is a dynamic story that is created based on the value of three variables: doorChoice, bearClothing, bearChoice.
// Spend some time changing the variables and running the file to see how the story changes.


var doorChoice = 1;
var bearClothing = "";
var bearChoice = 1;

console.log("You enter a dark room with two doors. Do you go through #1 or #2?");

if (doorChoice === 1) {
  bearClothing = "hat";
} else {
  bearClothing = "scarf";
}

console.log("You see a bear putting on a " + bearClothing);
console.log("It looks like that " + bearClothing + " is too small for the bear, do you...");

console.log("1. Offer your own to the bear?");
console.log("2. Point it out to the bear?");
console.log("3. Make a dash for the next room?");

if (bearChoice === 1) {
  "You offer the bear your " + bearClothing + " and the bear shows you a secret passage out!";
} else if (bearChoice === 2) {
  "You tell the bear the " + bearClothing + " is too small and it starts to cry!";
} else if (bearChoice === 3) {
  "You run as fast as you can into the next room. It's full of snakes!";
} else {
  "You stay with the bear and become it's best friend!";
}


// Questions
// 1. In English, using technical vocabulary, describe what is happening between lines 12 and 16.
  // On line line 12 if the doorchoice is 1 that means the bearclothing is a hat which is a string, if the doorchoice is not 1 then bearclothing is a scarf
// 2. What variable has a new value assigned to it after the first if statement executes?
  // after the first it looks like bearClothing has changed to scarf if the doorChoicec was not 1
// 3. If you changed the variable doorChoice to equal 3, what would the bearClothing value be?
  // the bearClothing would be a scarf because it does not equal 1
// 4. In English, using technical vocabulary, describe what is happening between lines lines 25 and 33.
  // if the bearChoice is equal to 1 the log would say the string below it adding the bearClothing that was previously decided the code runs until true statement is found
// 5. If you changed the variable bearChoice to equal 3, what will be the final outcome be?
  // the code would run inside the second else if statement because it found the true statement
// 6. If you changed the variable doorChoice to equal 1, and the variable bearChoice to equal 2, what will be the final outcome be?
  // Everything says the same as the original code BUT the message will instead say "you tell the bear the hat is too small etc" because this is true
// 7. What is your favorite ending?
  // i would change the bearChoice to 5 and run the last string...pretty good bodyguard i suppose
