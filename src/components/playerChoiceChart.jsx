import React from "react";
import { Pie } from "react-chartjs-2";

class PlayerChoiceChart extends React.Component {
  render() {
    const data = {
      labels: ["Rock", "Paper", "Scissors"],
      datasets: [
        {
          data: [
            this.props.state.playerRockCount,
            this.props.state.playerPaperCount,
            this.props.state.playerScissorCount
          ],
          backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
          hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"]
        }
      ]
    };

    const AIdata = {
      labels: ["Rock", "Paper", "Scissors"],
      datasets: [
        {
          data: [
            this.props.state.AIRockCount,
            this.props.state.AIPaperCount,
            this.props.state.AIScissorCount
          ],
          backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
          hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"]
        }
      ]
    };

    const options = {
      legend: {
        labels: {
          boxWidth: 30,
          fontColor: "#199"
        }
      }
    };

    return (
      <div id="chartContainer">
        <div id="playerChart">
          <h3 id="playerChartHeader">Player Choices</h3>
          <div>
            <Pie data={data} options={options} />
          </div>
        </div>
        <div id="chartSpacer"></div>
        <div id="AIChart">
          <h3 id="AIChartHeader">CPU Choices</h3>
          <div>
            <Pie data={AIdata} options={options} />
          </div>
        </div>
      </div>
    );
  }
}

export default PlayerChoiceChart;
