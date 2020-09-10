/*
GAME RULES:
- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game
*/

/*
above are the originl rules of the game from the udemy course i followed about javascript. I decided since halloween is coming up
to chanfe the photos from dice to pumpkins and depending on which face comes up, it will add points the user will lose all
their points and it will change to the other user's turn. Still the same rules, just changing the photos really.
*/
var scores, roundScore, activePlayer;

scores = [0, 0];
roundScore = 0;
activePlayer = 0;

document.querySelector(".pumpkin").style.display = "none";
document.getElementById("score-0").textContent = "0";
document.getElementById("score-1").textContent = "0";
document.getElementById("current-0").textContent = "0";
document.getElementById("current-1").textContent = "0";

document.querySelector(".btn-roll").addEventListener("click", function () {
  //when someone clicks the button, we need a random number
  var pumpkin = Math.floor(Math.random() * 6) + 1;
  // console.log(pumpkin);
  //then we need to display result
  var pumpkinDOM = document.querySelector(".pumpkin");
  pumpkinDOM.style.display = "block";
  pumpkinDOM.src = "pumpkin-" + pumpkin + ".png";

  //Update the round score but only if the rolled pumpkin is not pumpkin1
  if (pumpkin !== 1) {
    //add score
    roundScore += pumpkin;
    //first update roundScore
    document.querySelector("#current-" + activePlayer).textContent = roundScore;
    //then display roundScore
  } else {
    //next players turn
  }
});

//the abover was used to test something but may need it later
