# Simon Game

This is a web-based game that is similar to the popular memory game, Simon Says. The game consists of four colored buttons - red, blue, green, and yellow - that light up in a random sequence. The player must then repeat the sequence by clicking on the buttons in the correct order. Each time the player successfully completes a sequence, the game increases the difficulty level by adding an extra button to the sequence. If the player makes a mistake, the game ends and the player must start over. The project idea and structure came from Angela Yu.

Play it [HERE](https://rifleben.github.io/Simon-Game/)

## Getting Started

To play the game, simply open the index.html file in a web browser. The game will start once a key is pressed.

## How to Play

The game is played using the mouse and keyboard. To start the game, press any key on the keyboard. The game will then randomly select a button and light it up. The player must then click on the button to repeat the sequence. If the player clicks on the correct button, the game will add another button to the sequence and repeat the process. If the player makes a mistake, the game will end and the player will have to start over.

## Code Overview

The game is built using jQuery and consists of several functions that handle various aspects of the game logic. Here is a brief overview of the key functions:
- nextSequence() - This function is called each time a new sequence is generated. It selects a random button and adds it to the sequence. It then animates the button to indicate that it has been selected.
- playSound(name) - This function plays a sound file based on the name of the button that was selected.
- animatePress(currentColor) - This function adds an animation effect to the button that was clicked by the player.
- checkAnswer(currentLevel) - This function checks whether the player has clicked on the correct button in the current sequence. If the player is correct, it adds another button to the sequence. If the player is incorrect, the game ends.
- startOver() - This function resets the game state and allows the player to start over from the beginning.

The game also includes several event listeners that respond to user input. When the player clicks on a button, the game records the button's color and checks whether the player has clicked on the correct button. When the player presses a key on the keyboard, the game starts a new sequence and increases the difficulty level.
