<!DOCTYPE html>
<html lang="en-us">
  <head>
    <meta charset="UTF-8">
    <title>My Hangman Game</title>
    <link rel="stylesheet" href="./assets/css/style.css">
    <link rel="stylesheet" href="nice80sHeader.css">

  </head>
  <body>
    <div id="wrapper">
      <h1 class="chrome">HANGMAN</h1>
      <h3 class="dreams">80s style</h3>
    </div>

    <div id="container">
      <h2 id="music"></h2>
      <!-- The div where our band image will be shown. -->
      <div id="band-div"><img src="images/hangman-boardgame.jpg" alt="hangman board game from 80s"></div>
      <div id="game-section">
        <p>Press any key to get started!</p>
        <div>
          <h3 class="section-title">Wins</h3>
          <!-- The div where our wins will be shown. -->
          <div id="wins"></div>
        </div>
        <div id="current-word-section">
          <h3 class="section-title">Current Word</h3>
          <!-- The div where our current word (and guessing progress) will be shown. -->
          <div id="current-word"></div>
        </div>
        <div id="guesses-remaining-section">
          <h3 class="section-title">Number of Guesses Remaining</h3>
          <!-- The div where our remaining guesses will be shown. -->
          <div id="guesses-remaining"></div>
        </div>
        <div id="guessed-letters-section">
          <h3 class="section-title">Letters Already Guessed</h3>
          <!-- The div where our guesses letters will be shown. -->
          <div id="guessed-letters"></div>
        </div>
      </div>
    </div>

    <!-- Linking to our JavaScript file. -->
    <script type="text/javascript" src="hangmanGame.js"></script>
  </body>
