document.addEventListener("DOMContentLoaded", () => {
    const wordBank = ["lover", "films", "bunch", "books", "jazzy", "mints", "watch", "light", "scent", "final"];
    
    // Define the paragraphs for each day
    const paragraphBank = [
        `Dear Sam,<br><br>
        Congratulations on solving the first word of the day!<br><br>
        This is day 1 of my 10 days in the jungle. I know it is not going to be easy for the both of us. 
        I know how you are feeling right now. Whenever you miss me just look up at the sky and remind yourself 
        that despite the distance, we are still sharing this beautiful planet together. Sharing the same sunlight, 
        same oxygen and most importantly we are sharing our love for each other. Whenever you are feeling down, 
        anxious or stressed, take deep breaths and focus on the present, on what you can control. 
        You are my strong girl and I know you can get through this.<br><br>
        I too will miss you so much and I will use this as my strength. Whenever I am at a low, whenever I feel 
        like giving up, I will remind myself of you, and all the things we will do once this is all over. 
        You are my strength babes, you keep me going.<br><br>
        I love you.<br><br>
        Yours,<br>
        Owen Chen`,
        `Dear Sam,<br><br>
        Hello!!! This is day 2 of navigation. My guess is I am probably already not liking what I am going through. 
        The jungle here is really different from Singapore. It’s more dense, more humid, more inclines.<br><br>
        I hope you had a good night’s rest, enjoy your Saturday babes! Go play the Sims, catch up with the things 
        you’ve been wanting to do. Remember to hydrate and to treat yourself kindly.<br><br>
        I miss you. I miss your silly smile, the way you wrap your arms around mine and the way you sniff me hehe. 
        You are the strength I need and I will use you as my fuel to push through the remaining days.<br><br>
        I love you.<br><br>
        Yours,<br>
        Owen Chen`,
        `Dear Sam,<br><br>
        This is day 3 of my navigation. Hope your weekend is going just fine. I hope you are getting the rest you need. 
        Tomorrow I will be getting my rest. There won’t be any activities in the jungle tomorrow, we will just be resting. 
        Today is going to be another tough day, trying to reach all the checkpoints in order to pass.<br><br>
        How are you doing babes? Continue to keep me updated okay? I want to read, see and hear all about your days. 
        I cannot wait to be done with all this and check my phone and read all your messages. Remember to take it easy 
        as you mentally and physically prepare for the coming work week.<br><br>
        I love you till the ends of the universe and back.<br><br>
        Yours,<br>
        Owen Chen`,
        `Dear Sam,<br><br>
        Have a good day at work today. I am having my tactical break now. I am going to spend my whole day thinking of you hehe. 
        I miss your smell, your smile, your cheeks and your laughter. I miss lying and cuddling up with you.<br><br>
        I miss you babes. It won’t be long till we talk again. Time will go by fast. Focus on yourself, focus on finding yourself 
        and loving yourself. Everything happens for a reason and I believe this is another test to our relationship that we will 
        come out of stronger.<br><br>
        Take it easy babes. I love you so damn much.<br><br>
        Yours,<br>
        Owen Chen`,
        `Dear Sam,<br><br>
        It’s TACO TUESDAY! Today I am beginning my climb up the mountain. Will probably be going on all fours given how steep the terrain is HAHA. 
        I am probably dying of hunger by now. Cannot wait to come back to Singapore and eat all the good food together with you, 
        because things are just that much better with you.<br><br>
        I know today is office day for you. Don’t forget to send me your nom nom hehe! Keep me updated with all the office gossips and tea. 
        Take care of yourself, don’t overthink things too much okay? More often than not, things are just as they seem, nothing more nothing less.<br><br>
        I will always be here for you, love you always.<br><br>
        Yours,<br>
        Owen Chen`,
        `Dear Sam,<br><br>
        It’s mid week! Halfway through the working week. I on the other hand am almost reaching the peak of the mountain. 
        I heard there is no view at the top of the mountain, but that is okay. I am probably exhausted by all the climbing. 
        I cannot wait to get this over and done with.<br><br>
        I wonder what you are up to; How you are doing; What’s your newest obsession. I cannot wait to read them all HAHA. 
        You are my silly girl and you are so precious. Your scent is the most comforting in this world, your touch is so gentle and loving.<br><br>
        My love for you is larger than any mountain, ocean or space.<br><br>
        I love you.<br><br>
        Yours,<br>
        Owen Chen`,
        `Dear Sam,<br><br>
        It is a Thursday! With that we also have a total of 3 more days before we get to talk again. Today is the start of my survival phase of the exercise. 
        I am probably dead tired right now and my stomach all gulu gulu. Once I build my shelter I will probably just stare into the night sky thinking about you. 
        Thinking about all the things we will do together once I am back. Let me know what you want to do okay?<br><br>
        Today is another office day for you! Baby is a film girl forced corporate girly. I know there are days that you utterly hate the job you are doing. 
        I just want to reaffirm you that I understand your feeling. You got this okay? I am with you every step of the way.<br><br>
        I love you and I miss you so fucking much.<br><br>
        Yours,<br>
        Owen Chen`,
        `Dear Sam,<br><br>
        TGIF! It’s day 2 of my survival day, I think I will be killing the quail today. I’m probably really Missing You too HAHA. 
        I think killing the quail is easy but de gutting the quail and everything will be the challenging part. I’m on low power mode hehe.<br><br>
        Today baby is working from home! Have fun doing your work at home with Haku! Send me videos of Haku, our silly car.<br><br>
        We are almost there babes, 2 more days and I will be done with this. I can’t wait to hear all about your week :(<br><br>
        I love you so much babes, i really miss you so much.<br><br>
        Yours,<br>
        Owen Chen`,
        `Dear Sam,<br><br>
        It’s my last day of the survival phase of this exercise! I probably been through so much, I cannot wait to tell you all about it.<br><br>
        Enjoy your Saturday babes. Use this day to rest and relax. Drink water, go do what you love and have fun.<br><br>
        I keep thinking about you, staring at the stars, lonely in the jungle. We are almost done with this! I am so proud of us babes. 
        I really am. Let’s look forward to all the rest we can have together once this is all over.<br><br>
        Sending you lots of love.<br><br>
        Yours,<br>
        Owen`,
        `Dear Sam,<br><br>
        Today is the last day of my exercise, I will be trekking back to base camp. I really cannot wait to get back and read all the messages you have for me.<br><br>
        Enjoy your Sunday babes. Relax and be zen. HEHE. Mentally prepare yourself for the week ahead!<br><br>
        I LOVE YOU<br><br>
        Yours,<br>
        Owen Chen`,
        `Baby I miss you many much too. You are really on my mind 24/7 even though I might not express it as well as you do. 
        I cannot wait to come back and spend time with you. You make me happy, comfortable and safe. I cannot express how lucky I am to have you in my life. 
        We got this, we will get through this.<br><br>
        I love you till the ends of the universe.`,
        `Hello babes. I know are feeling sad. I may not know what happened, but I am here with you. You are my strong girl that always inspires me to be a better person. 
        You are worthy of all the things you desire when you set your mind on it. I know you are strong and capable. Don’t doubt yourself, Keep your chin high. 
        Don’t listen to what others have to say to you.<br><br>
        I love you lots.`
    ];
    
    
    
    // Calculate the current day index (0 = day 1, 1 = day 2, ...)
    const currentDate = new Date();
    const startDate = new Date("2024-11-29"); // Start date, adjust if needed
    const dayIndex = Math.floor((currentDate - startDate) / (1000 * 60 * 60 * 24)); // Get the number of days since the start date

    // Create buttons for the first 10 days and 2 extra ones ("Missing You" and "Sad")
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

    // Add "Missing You" and "Sad" buttons (always unlocked)
    const missingYouButton = document.createElement("button");
    missingYouButton.classList.add("btn", "btn-secondary", "m-2");
    missingYouButton.textContent = "Missing You";
    missingYouButton.dataset.day = "missing you";
    missingYouButton.addEventListener("click", showLetterModal);
    buttonContainer.appendChild(missingYouButton);

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
        
        if (day === "missing you") {
            paragraphToShow = paragraphBank[10]; // Display the content for "Missing You"
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
