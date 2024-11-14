

        // Function to roll the dice
        function rollTheDice() {
            // The setTimeout Function allows us to trigger the code after a set amount of milliseconds
            setTimeout(function () {
                // This variable assignment uses a Mtah random function to get 2 random numbers
                var randomNumber1 = Math.floor(Math.random() * 6) + 1;
                var randomNumber2 = Math.floor(Math.random() * 6) + 1;
                // We use querySelector to grab dice image and set it to what ever the random number is
                document.querySelector(".img1").setAttribute("src",
                    "dice" + randomNumber1 + ".png");
                // Again using querySelector to grab dice image and set it to what ever the random number is
                document.querySelector(".img2").setAttribute("src",
                    "dice" + randomNumber2 + ".png");
                // Determines a Draw
                if (randomNumber1 === randomNumber2) {
                    document.querySelector("h1").innerHTML = "Draw!";
                }
                // If Player 1 rolls less than Player 2, then Player 2 Wins
                else if (randomNumber1 < randomNumber2) {
                    document.querySelector("h1").innerHTML
                        = (player2 + " WINS!");
                }
                // Otherwise Player Wins
                else {
                    document.querySelector("h1").innerHTML
                        = (player1 + " WINS!");
                }
            // 500 miliseconds is half a second
            }, 500);
        }