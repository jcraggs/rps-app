import React from "react";
import "./index.css";
import RPSButtons from "./components/buttonChoices";
import PlayerChoiceChart from "./components/playerChoiceChart";

class App extends React.Component {
  state = {
    wins: 0,
    draws: 0,
    losses: 0,
    playerRockCount: 0,
    playerPaperCount: 0,
    playerScissorCount: 0,
    AIRockCount: 0,
    AIPaperCount: 0,
    AIScissorCount: 0,
    recentPlayerChoice: " -",
    recentAIChoice: " -",
    recentMatchMsg: " -"
  };

  updateScores = (
    WDLinfo,
    playerChoice,
    AIChoice,
    recentPlayerChoice,
    recentAIChoice,
    matchOutcome
  ) => {
    this.setState(() => {
      return { recentMatchMsg: matchOutcome };
    });
    this.setState(() => {
      return { recentPlayerChoice: recentPlayerChoice };
    });
    this.setState(() => {
      return { recentAIChoice: recentAIChoice };
    });
    this.setState(currentState => {
      let currentWDLValue = currentState[WDLinfo];
      if (currentWDLValue || currentWDLValue === 0) {
        return { [WDLinfo]: ++currentWDLValue };
      }
    });
    this.setState(currentState => {
      let currentPlayerRPSCount = currentState[playerChoice];
      if (currentPlayerRPSCount || currentPlayerRPSCount === 0) {
        return { [playerChoice]: ++currentPlayerRPSCount };
      }
    });
    this.setState(currentState => {
      let currentAIRPSCount = currentState[AIChoice];
      if (currentAIRPSCount || currentAIRPSCount === 0) {
        return { [AIChoice]: ++currentAIRPSCount };
      }
    });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>Choose Rock, Paper or Scissors:</p>
          <RPSButtons changeScoreState={this.updateScores} />
          <div id="choiceContainer">
            <p id="playerChoice">Player: {this.state.recentPlayerChoice}</p>
            <p id="choiceSpacer"></p>
            <p id="AIChoice">CPU: {this.state.recentAIChoice}</p>
          </div>
          <div>
            <p>Match outcome: {this.state.recentMatchMsg}</p>
          </div>
          <div>
            <p>
              Wins: {this.state.wins} | Draws: {this.state.draws} | Losses:{" "}
              {this.state.losses}
            </p>
          </div>
          <PlayerChoiceChart state={this.state} />
        </header>
      </div>
    );
  }
}

export default App;
