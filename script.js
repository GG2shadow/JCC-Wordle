document.addEventListener("DOMContentLoaded", () => {
    const wordBank = ["lover", "films", "bunch", "books", "jazzy", "mints", "watch", "light", "scent", "final"];
    
    // Calculate the current day index (0 = day 1, 1 = day 2, ...)
    const currentDate = new Date();
    const startDate = new Date("2024-11-29"); // Start date, adjust if needed
    const dayIndex = Math.floor((currentDate - startDate) / (1000 * 60 * 60 * 24)); // Get the number of days since the start date

    if (dayIndex >= wordBank.length) {
        alert("I coming back already, don't miss me so much leh!");
        return;
    }

    const correctWord = wordBank[dayIndex]; // Select the word based on the current day
    const boardContainer = document.getElementById("boardContainer");
    const guessButton = document.getElementById("guessButton");
    const winModal = new bootstrap.Modal(document.getElementById("winModal"));
    const openLetterButton = document.getElementById("openLetterButton");

    let currentGuess = "";
    const maxAttempts = 6;
    let currentRowIndex = 0;
    let rows = [];


    let enteredLetters = new Set(); // To track the letters entered

    // Create rows for guesses
    function initializeBoard() {
        for (let i = 0; i < maxAttempts; i++) {
            const row = document.createElement("div");
            row.classList.add("row");
            const tiles = [];

            for (let j = 0; j < 5; j++) {
                const cell = document.createElement("div");
                cell.classList.add("tile");
                row.appendChild(cell);
                tiles.push(cell);
            }

            boardContainer.appendChild(row);
            rows.push(tiles);
        }
    }

    initializeBoard();

    // Handle key press events to fill tiles
    document.addEventListener("keydown", (e) => {
        const currentRow = rows[currentRowIndex];

        // Only allow typing alphabetic characters
        if (/^[a-zA-Z]$/.test(e.key) && currentGuess.length < 5) {
            const letter = e.key.toLowerCase();

            // Prevent duplicate letters from being added
            if (enteredLetters.has(letter)) {
                alert("You have already entered this letter!");
                return;
            }

            currentGuess += letter; // Add the letter to the current guess
            enteredLetters.add(letter); // Add the letter to the set of entered letters
            const currentTile = currentRow[currentGuess.length - 1];
            currentTile.textContent = e.key.toUpperCase(); // Display the letter in the respective tile
        }

        // Handle backspace to delete the last character
        if (e.key === "Backspace" && currentGuess.length > 0) {
            const lastLetter = currentGuess[currentGuess.length - 1];
            enteredLetters.delete(lastLetter); // Remove the letter from the set
            currentGuess = currentGuess.slice(0, -1); // Remove last character from guess
            const currentTile = currentRow[currentGuess.length];
            currentTile.textContent = ""; // Clear the last tile
        }

        // Submit guess if the word length is 5
        if (currentGuess.length === 5) {
            guessButton.disabled = false; // Enable submit button after entering 5 letters
        } else {
            guessButton.disabled = true; // Disable submit button if less than 5 letters
        }
    });

    // Handle guess submission
    guessButton.addEventListener("click", () => {
        if (currentGuess.length !== 5) {
            alert("Please enter a 5-letter word!");
            return;
        }

        const currentRow = rows[currentRowIndex];
        for (let i = 0; i < 5; i++) {
            currentRow[i].className = "tile";

            if (currentGuess[i] === correctWord[i]) {
                currentRow[i].classList.add("correct");
            } else if (correctWord.includes(currentGuess[i])) {
                currentRow[i].classList.add("present");
            } else {
                currentRow[i].classList.add("absent");
            }
        }

        if (currentGuess === correctWord) {
            winModal.show();
        } else {
            currentRowIndex++;
            if (currentRowIndex >= maxAttempts) {
                alert("Game over! The correct word was: " + correctWord);
                guessButton.disabled = true;
                return;
            }

            currentGuess = "";
            enteredLetters.clear(); // Reset the entered letters set for the next guess
        }
    });

    // Handle "View all letters" button in the winning modal
    const viewAllLettersFromModalButton = document.getElementById("viewAllLettersFromModalButton");

    viewAllLettersFromModalButton.addEventListener("click", () => {
        window.location.href = "all-letters.html"; // Navigate to the "View all letters" page
    });


    // Step 1: Add the "View all letters" button
    const viewAllLettersButton = document.getElementById("viewAllLettersButton");

    // Step 4: Add navigation to the new page for all the letters
    viewAllLettersButton.addEventListener("click", () => {
        window.location.href = "all-letters.html"; // Navigate to the new page with 12 buttons
    });
});
