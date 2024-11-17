document.addEventListener("DOMContentLoaded", () => {
    const wordBank = ["cream", "cents", "wakey", "china", "chewy", "blush", "study", "virgo", "boner", "stick"];
    
    // Define the paragraphs for each day
    const paragraphBank = [
        "This is the paragraph for Day 1. You can provide detailed text here.",
        "This is the paragraph for Day 2. Each day has a unique description.",
        "This is the paragraph for Day 3. You can include interesting information.",
        "This is the paragraph for Day 4. Keep the text engaging for the user.",
        "This is the paragraph for Day 5. Change up the content for each day.",
        "This is the paragraph for Day 6. Make each day stand out with its own theme.",
        "This is the paragraph for Day 7. Be creative with the content you provide.",
        "This is the paragraph for Day 8. Personalize the information for your game.",
        "This is the paragraph for Day 9. Add informative or fun details here.",
        "This is the paragraph for Day 10. The final day can wrap up the journey.",
        "Hungry - Here is a fun extra content for the 'Hungry' button.",
        "Sad - Here is a thoughtful content for the 'Sad' button."
    ];

    // Calculate the current day index (0 = day 1, 1 = day 2, ...)
    const currentDate = new Date();
    const startDate = new Date("2024-11-13"); // Start date, adjust if needed
    const dayIndex = Math.floor((currentDate - startDate) / (1000 * 60 * 60 * 24)); // Get the number of days since the start date

    // Create buttons for the first 10 days and 2 extra ones ("Hungry" and "Sad")
    const buttonContainer = document.getElementById("buttonContainer");

    wordBank.forEach((word, index) => {
        const button = document.createElement("button");
        button.classList.add("btn", "btn-primary", "m-2");
        button.textContent = `Day ${index + 1}`;
        button.dataset.day = index; // Store the index to know which day was clicked

        // Disable the button if the day has not yet arrived
        if (index > dayIndex) {
            button.disabled = true;
            button.title = "Unlocks on " + new Date(startDate.getTime() + (index * 24 * 60 * 60 * 1000)).toLocaleDateString();
        }

        button.addEventListener("click", showLetterModal);
        buttonContainer.appendChild(button);
    });

    // Add "Hungry" and "Sad" buttons (always unlocked)
    const hungryButton = document.createElement("button");
    hungryButton.classList.add("btn", "btn-secondary", "m-2");
    hungryButton.textContent = "Hungry";
    hungryButton.dataset.day = "hungry";
    hungryButton.addEventListener("click", showLetterModal);
    buttonContainer.appendChild(hungryButton);

    const sadButton = document.createElement("button");
    sadButton.classList.add("btn", "btn-secondary", "m-2");
    sadButton.textContent = "Sad";
    sadButton.dataset.day = "sad";
    sadButton.addEventListener("click", showLetterModal);
    buttonContainer.appendChild(sadButton);

    // Function to show the modal with the correct paragraph for the clicked button
    function showLetterModal(event) {
        const day = event.target.dataset.day;
        
        let paragraphToShow = "";
        
        if (day === "hungry") {
            paragraphToShow = paragraphBank[10]; // Display the content for "Hungry"
        } else if (day === "sad") {
            paragraphToShow = paragraphBank[11]; // Display the content for "Sad"
        } else {
            paragraphToShow = paragraphBank[day]; // Get the paragraph based on the day
        }

        // Inject the paragraph into the modal body and show the modal
        document.getElementById("letterModalBody").innerHTML = `<p>${paragraphToShow}</p>`; // Set paragraph HTML
        const letterModal = new bootstrap.Modal(document.getElementById("letterModal"));
        letterModal.show();
    }
});
