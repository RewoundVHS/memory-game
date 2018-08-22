var openCards = [];
var matchedCards = [];
// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

/*
 This is a list of all of the cards that I want to have matched on the page. I assigned each card the same name as it would be for its font awesome assignment
 */
var cardList = ["fa-diamond", "fa-diamond", "fa-anchor", "fa-anchor", "fa-bomb", "fa-bomb", "fa-bolt", "fa-bolt", "fa-cube", "fa-cube", "fa-leaf", "fa-leaf", "fa-paper-plane-o", "fa-paper-plane-o", "fa-bicycle", "fa-bicycle"];



//this function displays all of the cards in html. It also adds a child DOM element of "i" which will hold the class fa for each card. It was easier to do it this way after deleting it from the html than to input it all in html again.
function displayCards() {
  for (var x = 0; x < cardList.length; x++) {
    $(".deck").append('<li class="card"> </li>');
  };


};

displayCards();

 //the function "shuffles" the card list and then provides the html to display the cards on the page face down, each with a random card assigned to it

function shuffleCards() {
  $(".card").each(function(){
    $(this).append("<i>");
  });


  var cards = $(".card i");
  var shuffledList = shuffle(cardList);
  for (var x = 0; x < shuffledList.length; x++) {

    $(cards[x]).addClass("fa " + shuffledList[x]);

  };
};

shuffleCards()

/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */

 //This function flips the cards when they are clicked on as an event listener



function flipBack(){
  $('.open').removeClass('open show');
};

//Restart function that sets all of the card settings back to not open and reshuffles the game
$(".restart").on('click', function resetGame(){
  $('.card').removeClass('open show');
  $('.card i').remove();
  shuffleCards();
});


function flipCards(){
  //checks both elements (total of 2) in openCards to see if they equal eachother
  //The problem you are having is that it is requring a click in order to execute the else if section of the loop. You need to change that so it does not require a click, and will only require a click for the first two cards
  if (openCards.length < 2) {
      $(this).addClass('open show');
      openCards.push($(this).children('fa'));
    } else if (openCards.length === 2) {
      // doesMatch();
      flipBack();
      openCards = [];
    };
  };

$('.card').on('click', flipCards);


function doesMatch(){
  //if the two match in matchChecker push both to matched Cards and add the matched class to the html for those elements
  if (openCards[0] === openCards[1]) {
    matchedCards.push(openCards[0, 1]);
    openCards = [];
  } else if (openCards[0] != openCards[1]) {
    flipBack();
    openCards = [];
  };
  // if they do not match then it resets them back to the default state
};
//
// function winChecker(){
//   //checks the length of matchedCards array to see if it equals the same length as cardList. If it does then the won game popup appears and if not then you continue the game
// };
