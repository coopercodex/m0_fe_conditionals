// goodDrivingRecord = true
// isOver25 = true
// Write a program that evaluates the status of the variables above, and uses logic to print one of three possible messages:
//
// If the driving record is good and user is over 25 years old, they should get a discount on the car rental
// If the user either has a good record or is over 25 years old, they should pay full price
// If the user is not over 25 and has a bad driving record, they need to have someone else sign for the rental

var goodDrivingRecord = false;
var isOver25 = false;

if (goodDrivingRecord && isOver25) {
  console.log("Yes you get a discount!")
} else if (goodDrivingRecord || isOver25) {
  console.log("You have to pay full price!")
} else if (goodDrivingRecord === false && isOver25 === false) {
  console.log("You need to have a cosigner")
};
