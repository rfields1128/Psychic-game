var wins = 0
  var losses = 0
  var guessLeft = 9
  var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "_"];
  var guessesSoFar;
  var computerGuessIndex;
  var computerGuess;
  var userchoice;
      function reset() {
      guessesSoFar = []
          guessLeft = 9
// reset computerGuess
computerGuessIndex = (Math.floor(Math.random() * 26));
computerGuess = letters[computerGuessIndex]
// console.log(computerGuess);
}
      document.onkeyup = function (event) {
      userchoice = event.key;
// if userchoice is equal to item in guessesSoFar then
          if (guessesSoFar.includes(userchoice) || !letters.includes(userchoice)) {
              return
}
// console.log(userchoice);
guessesSoFar.push(userchoice);
// console.log(guessesSoFar);
// if userkey is equal to computer guess then
          if (userchoice === computerGuess) {
      // increase win by one
      wins++
              reset()
}
// if userkey is not equal to computer guess then
          else {
      // decrease guess left by one
      guessLeft--
              // if guessleft equals 0, then
              if (guessLeft === 0) {
      // increase losses +1
      losses++
                  reset()
}
}
document.getElementById("wins").innerText = "Wins: " + wins
document.getElementById("losses").innerText = "Losses: " + losses
document.getElementById("guessLeft").innerText = "Guesses Left: " + guessLeft
document.getElementById("guessesMade").innerText = "Your Guesses So Far: " + guessesSoFar
}
{/* // initialize the game */}
  reset();