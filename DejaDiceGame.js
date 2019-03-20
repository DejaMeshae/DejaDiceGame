function gameStart() {      
				var inputName = prompt("What is your name?");     			  
				var firstCharacter = inputName.slice(0,1);				  
				var upperCasefirstCharacter = firstCharacter.toUpperCase();   
				var restOfName = inputName.slice(1,inputName.length); 		
					alert("Welcome " + upperCasefirstCharacter + restOfName + " to my dice game! \r\nAre you feeling lucky? \r\nIf it takes for you less than 40 rolls to spell out  \r\nAcorns you win!"); 			}
				gameStart(); 

function runGame() {
				var correctRoll = [4, 6, 8, 10, 12, 20]; 
				var correctLetter = ["A", "C", "O", "R", "N", "S"]; 
				var diceOrder = [4, 6, 8, 10, 12, 20]; 
				var rollCounter = 1; 
				
				for (let i = 0; i < correctRoll.length; i++) { 
					 

					while (rollDie(diceOrder[i]) !== correctRoll[i]) { 
					rollCounter++;
					}
					console.log(correctLetter[i]);
				}
				console.log(rollCounter);
			
					if (rollCounter < 40) {
						alert("It took you " + rollCounter + " rolls to spell out Acorns. \r\nToday is your lucky day!");
					} else {
						alert("It took you " + rollCounter + " rolls to spell out Acorns. \r\nToday is not you're lucky day, please try again!")
					}

					if(confirm("Would you like to try your luck again?")){
						return runGame();
					}
					else{
						alert("Thanks for playing!");
					}
					}		

function rollDie(n) {
			var result = Math.ceil(Math.random() * n);
			return result;
					}

					runGame();
			
			
