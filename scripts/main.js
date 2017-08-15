/*
   Implement a Blackjack hand value calculator.

   Open up the `index.html` file and your console
   to watch the assertions pass as you write your code.

   Also remember, that the parameter `hand` will be an array, so
   you'll need to parse through that first before you can start to
   write your logic.
*/
let k = 10;
let q = 10;
let j = 10;
var a;



var cardCount = 0;

function handValue(hand){
  for(let i = 0; i < hand.length; i++){
  if (hand[i] === a && cardCount <= 10){
    cardCount += 11
  } else if (hand[i] === a && cardCount >=10){
    cardCount += 1
  } else {
    cardCount += parseInt(hand[i]);
  }
}
};
handValue( [2, 2, 8] );

console.log(cardCount);









/* -----  Hints ------

1..10   ==> Worth face value (1 = 1, 4 = 4, etc)
K, Q, J ==> Worth 10
A       ==> Worth 1 or 11

*/
