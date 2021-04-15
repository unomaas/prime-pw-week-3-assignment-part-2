console.log('****** Loops Practice *******');

// 1. 'for' loop
console.log('---- #1. For loops ----');
// Example: a for loop to console.log numbers from 0 to 3
console.log('Example: Count from 0 to 3');
// start i at 0, while i is < 4 do code between {}, afterwards add 1 to i (i++)
for (let i=0; i<4; i++) {
  console.log(i);
}

// 1.a. TODO: Write a for loop to console.log the numbers from 0 to 5
//   - Which part of the example loop do you need to change to do this?
console.log('#1.a: Count from 0 to 5');
for (let i = 0; i < 6; i++) {
  console.log(i);
}
console.log("Answer: You need to change the 'Stopping Condition' in the example for loop to be 'i < 6', so that it'll log 1-5 instead of 1-3.");

// 1.b. TODO: Write a for loop to console.log the numbers from 3 to 5
//   - Which part of the example loop do you need to change to do this?
console.log('#1.b: Count from 3 to 5');
for (let i = 3; i < 6; i++) {
  console.log(i);
}
console.log("Answer: You need to change the declaration of the 'Iterator Variable' in the example for loop to be 'i = 3', so that it'll start counting at 3 instead of 0.");

// 1.c. TODO: Write a for loop to console.log EVEN numbers from 2 to 10
//   - Which part of the example loop do you need to change to do this?
console.log('#1.c: Count even numbers from 2 to 10 (2, 4, 6, 8, 10):');
for (let i = 2; i <= 10; i += 2) {
  console.log(i);
}
console.log("Answer: You need to change three things: #1.) Change the the 'Iteration Statement' in the example for loop to be 'i += 2', so it'll add 2 each iteration, and #2.) Change the 'Stopping Condition' to end at 10 (I did this with '<= 10', but it could also be done with '< 11'), and lastly #3.) Change the 'Iterator Variable' to start at 2.");

// 1.d. (STRETCH) TODO: Write a for loop to do a counddown from 5 to 0
console.log('#1.d: STRETCH: Countdown from 5 to 0');
for (let i = 5; i >= 0; i--) {
  console.log(i);
}
console.log("Answer: You didn't ask, but to do a for loop in reverse, you set the highest desired number to the 'Iterator Variable', and then set the lowest desired number to the 'Stopping Condition'.  The 'Iteration Statement' changes from Increment to Decrement.");

// 2. For of loops
console.log('---- #2. For Of loop ----');
let stars = ['Polaris', 'Gacrux', 'Formalhaut', 'Rigel', 'Deneb']

// 2.a. TODO: Write a for of loop to console.log each star in the 'stars' array
console.log('#2.a: Some stars using For Of loops:');
for (let star of stars) {
  console.log(star);
}

// 3. While loops
console.log('---- #3. While loop ----');

// 3.a. TODO: Write a while loop to console.log each star in the 'stars' array
console.log('#3a.: Some stars using While loops:');
let starIndex = 0;
while (starName = stars[starIndex]) {
  console.log(starName);
  starIndex ++;
}

// 3.b. TODO: Write a while loop to console.log the numbers from 0 to 5
console.log('#3.b: Count from 0 to 5');
let countOne = 0;
while (countOne < 6) {
  console.log(countOne);
  countOne ++;
}

// 3.c. TODO: Write a while loop to console.log the numbers from 10 to 5
console.log('#3.c: Count backwards from 10 to 5');
let countTwo = 10;
while (countTwo > 4) {
  console.log(countTwo);
  countTwo --;
}

console.log("Ryan's Comment: These were fun, thanks!  I'd say the trickiest was #3.a, the console.log with while loops. :)  Have a good day!");
