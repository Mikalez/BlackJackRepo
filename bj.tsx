// 
// File is a command-line driven blackjack simulator
// Takes into account basic strategy, high-low count, & a bet spread
//

// 3 bs tables 
tables [][][]

// the count

let count = 0

// the deck 

function shuffle

// num of remaining decks
let remainingDecks = 0

// guestimmate number of remaining decks
// remaining decks will always be updated to a whole number & when within a .2 
// from the next whole deck number, update remaing decks to the next whole deck number
function determineNumberOfRemainingDecks


// control flow:
// shuffle deck at beginning of game
// loop until not enough money or goal has been reached: 
// bet a certain amount based on true count ->
// deal out a hand ->
// ask for insurance if dealer upcard is an ace ->
// pick best option based on basic strategy ->
// update balance ->
// update count ->
// update true count ->
// loop back
