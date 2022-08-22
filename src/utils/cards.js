let cards = [];
let suits = ["♦️", "♠️", "♥️", "♣️"];
let values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

suits.forEach( function ( suit ){
  let color = 'black';
  if (suit === '♥️' || suit === '♦️' ) {
      color = 'red';
    } 
  values.forEach(function(value) {
    let cost = +value;
    if (value === 'A') {
      cost = 14
    } else if (value === 'K') {
      cost = 13
    } else if (value === 'Q') {
      cost = 12
    } else if (value === 'J') {
      cost = 11
    }
    let obj = {
      number: value,
      suit,
      cost,
      color
    }
    cards.push(obj);
  });
});

export default cards
