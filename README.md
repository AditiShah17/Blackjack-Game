# Blackjack Game

# Vanilla JavaScript Blackjack

A lightweight, interactive Blackjack (21) game built with vanilla JavaScript. This project focuses on core game logic, state management, and DOM manipulation to create a playable browser-based card game.

## 🚀 Features

* **Dynamic Card Generation:** Includes a custom `getRandomCard()` function that accurately maps random numbers to Blackjack card values (Face cards evaluate to 10, Aces evaluate to 11).
* **Real-Time State Management:** Tracks the player's current status using boolean variables (`isAlive`, `hasBlackJack`) to prevent illegal moves (like drawing a card after busting).
* **DOM Manipulation:** Seamlessly updates the HTML user interface in real-time as the player draws cards and the sum changes, utilizing both `getElementById` and `querySelector`.
* **Player Data Tracking:** Uses JavaScript objects to store and display player information, such as their name and current chip count.

## 🧠 How It Works

The game relies on three primary functions to handle the action:

1. **`startGame()`**: Initializes the game state, draws the first two cards, calculates the initial sum, and triggers the board render.
2. **`renderGame()`**: The core update loop. It loops through the `cards` array to display the current hand, updates the sum on the screen, and evaluates the win/loss conditions based on the score ( `<= 20`, `=== 21`, or `> 21`).
3. **`newCard()`**: Allows the player to "Hit." It verifies that the player is still alive and hasn't already won before generating a new card, adding it to the array, and re-rendering the game.

## 🛠️ Technologies Used

* **JavaScript (ES6+)**: Handles all game logic, math operations, and state.
* **HTML/CSS**: (Assumed) Provides the structure and styling for the game interface.

## 🔮 Future Improvements

* Add a "Dealer" opponent with AI logic (hitting until 17).
* Implement dynamic Ace logic (allowing Aces to count as 1 or 11 depending on the current sum).
* Add betting mechanics to increase or decrease the player's chips based on round outcomes.
