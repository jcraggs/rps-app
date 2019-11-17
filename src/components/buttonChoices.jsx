import React from "react";
import rockPicture from "../rock.png";
import paperPicture from "../paper.png";
import scissorPicture from "../scissors.png";

const RPSButtons = props => {
  return (
    <div className="buttonContainer">
      <button
        id="rockButton"
        onClick={() => {
          winningCompare("Rock", props);
        }}
      >
        <img id="rock" src={rockPicture} alt="rock"></img>
      </button>
      <button
        id="paperButton"
        onClick={() => {
          winningCompare("Paper", props);
        }}
      >
        <img id="paper" src={paperPicture} alt="paper"></img>
      </button>
      <button
        id="scissorsButton"
        onClick={() => {
          winningCompare("Scissors", props);
        }}
      >
        <img id="scissors" src={scissorPicture} alt="scissors"></img>
      </button>
    </div>
  );
};

const winningCompare = (playerChoice, props) => {
  let randNum = Math.floor(Math.random() * (2 - 0 + 1) + 0);
  const RPSObj = { 0: "Rock", 1: "Paper", 2: "Scissors" };
  const AIchoice = RPSObj[randNum];

  // Winning conditions
  // Rock
  if (playerChoice === "Rock" && AIchoice === "Rock") {
    props.changeScoreState(
      "draws",
      "playerRockCount",
      "AIRockCount",
      playerChoice,
      AIchoice,
      "Draw"
    );
  }
  if (playerChoice === "Rock" && AIchoice === "Scissors") {
    props.changeScoreState(
      "wins",
      "playerRockCount",
      "AIScissorCount",
      playerChoice,
      AIchoice,
      "You won!"
    );
  }
  if (playerChoice === "Rock" && AIchoice === "Paper") {
    props.changeScoreState(
      "losses",
      "playerRockCount",
      "AIPaperCount",
      playerChoice,
      AIchoice,
      "You lost :("
    );
  }

  //Paper
  if (playerChoice === "Paper" && AIchoice === "Paper") {
    props.changeScoreState(
      "draws",
      "playerPaperCount",
      "AIPaperCount",
      playerChoice,
      AIchoice,
      "Draw"
    );
  }
  if (playerChoice === "Paper" && AIchoice === "Rock") {
    props.changeScoreState(
      "wins",
      "playerPaperCount",
      "AIRockCount",
      playerChoice,
      AIchoice,
      "You won!"
    );
  }
  if (playerChoice === "Paper" && AIchoice === "Scissors") {
    props.changeScoreState(
      "losses",
      "playerPaperCount",
      "AIScissorCount",
      playerChoice,
      AIchoice,
      "You lost :("
    );
  }

  //Scissors
  if (playerChoice === "Scissors" && AIchoice === "Scissors") {
    props.changeScoreState(
      "draws",
      "playerScissorCount",
      "AIScissorCount",
      playerChoice,
      AIchoice,
      "Draw"
    );
  }
  if (playerChoice === "Scissors" && AIchoice === "Paper") {
    props.changeScoreState(
      "wins",
      "playerScissorCount",
      "AIPaperCount",
      playerChoice,
      AIchoice,
      "You won!"
    );
  }
  if (playerChoice === "Scissors" && AIchoice === "Rock") {
    props.changeScoreState(
      "losses",
      "playerScissorCount",
      "AIRockCount",
      playerChoice,
      AIchoice,
      "You lost :("
    );
  }
};

export default RPSButtons;
