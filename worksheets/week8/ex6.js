"use strict";

// week 8 exericse 6

class RPSHandler {
    constructor() {
        this.results = ["Computer Wins!", "Player Wins!", "Tie!!"];

        this.moves = [
            {
                name: "rock",
                beatBy: "paper",
                beats: "scissors",
                img: "rock.png"
            },
            {
                name: "paper",
                beatBy: "scissors",
                beats: "rock",
                img: "paper.png"
            },
            {
                name: "scissors",
                beatBy: "rock",
                beats: "paper",
                img: "scissors.png"
            }
        ];
        this.computer = null;
        this.player = null;
        this.computerScore = 0;
        this.playerScore = 0;
    }
    handleEvent(event) {


        if (event.target.nodeName == "IMG") {
	
            const infoDiv = document.body.querySelector("#player .info-div");

            if (event.type === "mouseover") {
                infoDiv.querySelector("div:first-child > span:first-child").textContent = event.target.alt;
                infoDiv.querySelector("div:last-child > span:last-child").textContent = event.target.alt;
                const move = this.moves.find(mv => mv.name == event.target.alt);
                infoDiv.querySelector("div:first-child > span:last-child").textContent = move.beats;
                infoDiv.querySelector("div:last-child > span:first-child").textContent = move.beatBy;
                infoDiv.classList.remove("hide");
            } else if (event.type === "mouseout") {
                infoDiv.classList.add("hide");
            }
        } else if (event.target.nodeName == "BUTTON") {

			if (event.type == "click") {
				// challenge: if you add a name="" to the new game button, this
				// is WAY easier e.g. I used name="new" on the New Game button
				if (event.target.name == "new") {
					// new game: reset everything
					// TODO: since we're using these objects in 2 different 
					// places, you should just store them in variables up above!
					document.body.querySelector("#player-choice").textContent = "";
					document.body.querySelector("#computer-choice").textContent = "";
					document.body.querySelector("#result").textContent = "";
					document.body.querySelector(".player-score .score").textContent = "";
					document.body.querySelector(".computer-score .score").textContent = "";

					document.body.querySelector("#results > div:first-of-type").classList.add("hide");				
					
					this.player = null;
					this.computer = null;
					this.computerScore = 0;
					this.playerScore = 0;
					
					document.querySelector("#computer img").src = "images/question.png";
				} else {
					
					this.player = this.moves.find(mv => mv.name == event.target.textContent.toLowerCase());
					this.computer = this.getComputerMove();

					const result = this.getResult();
					if (result == 0) {
						this.computerScore++;
					} else if (result == 1) {
						this.playerScore++;
					}

					const compImg = document.querySelector("#computer img");
					compImg.src = `images/${this.computer.img}`;
					compImg.alt = this.computer.name;
					
					document.body.querySelector("#player-choice").textContent = this.player.name;
					document.body.querySelector("#computer-choice").textContent = this.computer.name;
					document.body.querySelector("#result").textContent = this.results[result];
					document.body.querySelector(".player-score .score").textContent = this.playerScore;
					document.body.querySelector(".computer-score .score").textContent = this.computerScore;

					document.body.querySelector("#results > div:first-of-type").classList.remove("hide");
				}
			}
        }
    }
    getComputerMove() {
        return this.moves[Math.floor(Math.random() * 3)];
    }

    getResult() {
        if (this.player != null && this.computer != null) {
            if (this.player.beats === this.computer.name) {
                return 1;
            } else if (this.player.beatBy === this.computer.name) {
                return 0;
            } else if (this.player.name === this.computer.name) {
                return 2;
            }
        }
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const imgs = document.querySelectorAll(".player");
    const handler = new RPSHandler();
    for (let img of imgs) {
        img.addEventListener("mouseover", handler);
        img.addEventListener("mouseout", handler);
    }
    const buttons = document.querySelectorAll("button");
    for (let btn of buttons) {
        btn.addEventListener("click", handler);
    }
});