(this["webpackJsonprps-app"]=this["webpackJsonprps-app"]||[]).push([[0],{153:function(e,t,a){"use strict";a.r(t);var r=a(0),o=a.n(r),n=a(48),c=a.n(n),s=(a(32),a(20)),i=a(15),l=a(16),p=a(18),u=a(17),h=a(19),C=a(49),d=a.n(C),S=a(50),m=a.n(S),E=a(51),k=a.n(E),f=function(e,t){var a={0:"Rock",1:"Paper",2:"Scissors"}[Math.floor(3*Math.random()+0)];"Rock"===e&&"Rock"===a&&t.changeScoreState("draws","playerRockCount","AIRockCount",e,a,"Draw"),"Rock"===e&&"Scissors"===a&&t.changeScoreState("wins","playerRockCount","AIScissorCount",e,a,"You won!"),"Rock"===e&&"Paper"===a&&t.changeScoreState("losses","playerRockCount","AIPaperCount",e,a,"You lost :("),"Paper"===e&&"Paper"===a&&t.changeScoreState("draws","playerPaperCount","AIPaperCount",e,a,"Draw"),"Paper"===e&&"Rock"===a&&t.changeScoreState("wins","playerPaperCount","AIRockCount",e,a,"You won!"),"Paper"===e&&"Scissors"===a&&t.changeScoreState("losses","playerPaperCount","AIScissorCount",e,a,"You lost :("),"Scissors"===e&&"Scissors"===a&&t.changeScoreState("draws","playerScissorCount","AIScissorCount",e,a,"Draw"),"Scissors"===e&&"Paper"===a&&t.changeScoreState("wins","playerScissorCount","AIPaperCount",e,a,"You won!"),"Scissors"===e&&"Rock"===a&&t.changeScoreState("losses","playerScissorCount","AIRockCount",e,a,"You lost :(")},y=function(e){return o.a.createElement("div",null,o.a.createElement("button",{id:"rockButton",onClick:function(){f("Rock",e)}},o.a.createElement("img",{id:"rock",src:d.a,alt:"rock"})),o.a.createElement("button",{id:"paperButton",onClick:function(){f("Paper",e)}},o.a.createElement("img",{id:"paper",src:m.a,alt:"paper"})),o.a.createElement("button",{id:"scissorsButton",onClick:function(){f("Scissors",e)}},o.a.createElement("img",{id:"scissors",src:k.a,alt:"scissors"})))},A=a(30),P=function(e){function t(){return Object(i.a)(this,t),Object(p.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e={labels:["Rock","Paper","Scissors"],datasets:[{data:[this.props.state.playerRockCount,this.props.state.playerPaperCount,this.props.state.playerScissorCount],backgroundColor:["#FF6384","#36A2EB","#FFCE56"],hoverBackgroundColor:["#FF6384","#36A2EB","#FFCE56"]}]},t={labels:["Rock","Paper","Scissors"],datasets:[{data:[this.props.state.AIRockCount,this.props.state.AIPaperCount,this.props.state.AIScissorCount],backgroundColor:["#FF6384","#36A2EB","#FFCE56"],hoverBackgroundColor:["#FF6384","#36A2EB","#FFCE56"]}]},a={legend:{labels:{boxWidth:30,fontColor:"#199"}}};return o.a.createElement("div",{id:"chartContainer"},o.a.createElement("div",{id:"playerChart"},o.a.createElement("h3",{id:"playerChartHeader"},"Player Choices"),o.a.createElement("div",null,o.a.createElement(A.a,{data:e,options:a}))),o.a.createElement("div",{id:"chartSpacer"}),o.a.createElement("div",{id:"AIChart"},o.a.createElement("h3",{id:"AIChartHeader"},"CPU Choices"),o.a.createElement("div",null,o.a.createElement(A.a,{data:t,options:a}))))}}]),t}(o.a.Component),g=function(e){function t(){var e,a;Object(i.a)(this,t);for(var r=arguments.length,o=new Array(r),n=0;n<r;n++)o[n]=arguments[n];return(a=Object(p.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={wins:0,draws:0,losses:0,playerRockCount:0,playerPaperCount:0,playerScissorCount:0,AIRockCount:0,AIPaperCount:0,AIScissorCount:0,recentPlayerChoice:" -",recentAIChoice:" -",recentMatchMsg:" -"},a.updateScores=function(e,t,r,o,n,c){a.setState((function(){return{recentMatchMsg:c}})),a.setState((function(){return{recentPlayerChoice:o}})),a.setState((function(){return{recentAIChoice:n}})),a.setState((function(t){var a=t[e];if(a||0===a)return Object(s.a)({},e,++a)})),a.setState((function(e){var a=e[t];if(a||0===a)return Object(s.a)({},t,++a)})),a.setState((function(e){var t=e[r];if(t||0===t)return Object(s.a)({},r,++t)}))},a}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement("header",{className:"App-header"},o.a.createElement("p",null,"Choose Rock, Paper or Scissors"),o.a.createElement(y,{changeScoreState:this.updateScores}),o.a.createElement("div",{id:"choiceContainer"},o.a.createElement("p",{id:"playerChoice"},"Player: ",this.state.recentPlayerChoice),o.a.createElement("p",{id:"choiceSpacer"}),o.a.createElement("p",{id:"AIChoice"},"CPU: ",this.state.recentAIChoice)),o.a.createElement("div",null,o.a.createElement("p",null,"Match outcome: ",this.state.recentMatchMsg)),o.a.createElement("div",null,o.a.createElement("p",null,"Wins: ",this.state.wins," | Draws: ",this.state.draws," | Losses:"," ",this.state.losses)),o.a.createElement(P,{state:this.state})))}}]),t}(o.a.Component);c.a.render(o.a.createElement(g,null),document.getElementById("root"))},32:function(e,t,a){},49:function(e,t,a){e.exports=a.p+"static/media/rock.f3c7e8fa.png"},50:function(e,t,a){e.exports=a.p+"static/media/paper.7ff010c6.png"},51:function(e,t,a){e.exports=a.p+"static/media/scissors.6c9748c7.png"},53:function(e,t,a){e.exports=a(153)}},[[53,1,2]]]);
//# sourceMappingURL=main.4d0ff33f.chunk.js.map