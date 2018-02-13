var gameCanvas = document.createElement("canvas");
var gameCanvasContext = gameCanvas.getContext("2d"); // Creating the Canvas
gameCanvas.width = 800;
gameCanvas.height = 600;
document.getElementById('gameContainer').appendChild(gameCanvas); // Placing the Canvas
gameCanvasContext.fillStyle = "#808080";
gameCanvasContext.fillRect(0,0,800,600); // General background
gameCanvasContext.fillStyle = "#B6ACAC";
gameCanvasContext.fillRect(170,0,460,600); // Game-area background
gameCanvasContext.fillStyle = "#FFFFFF";
gameCanvasContext.fillRect(170,220,460,5); // Player 1's track
gameCanvasContext.fillRect(170,340,460,5); // Player 2's track

// Begginning to draw Player 1's Gauge
gameCanvasContext.shadowBlur = 40;
gameCanvasContext.shadowColor = "rgba(255,180,180,0.5)"; // Red aura
gameCanvasContext.fillStyle = "#FFFFFF";
gameCanvasContext.beginPath();
gameCanvasContext.moveTo(45, 50);
gameCanvasContext.lineTo(125,50);
gameCanvasContext.arc(125,67,17,1.5*Math.PI,0.5*Math.PI);
gameCanvasContext.lineTo(50,84);
gameCanvasContext.arc(45,67,17,0.5*Math.PI,1.5*Math.PI);
gameCanvasContext.fill();
// End Player 1's Gauge
// The Gauge is 80px + 34px long and 30px tall

// Begginning to draw Player 2's Gauge
gameCanvasContext.shadowBlur = 40;
gameCanvasContext.shadowColor = "rgba(180,180,255,0.5)"; // Blue aura
gameCanvasContext.fillStyle = "#FFFFFF";
gameCanvasContext.beginPath();
gameCanvasContext.moveTo(675,50)
gameCanvasContext.lineTo(755,50);
gameCanvasContext.arc(755,67,17,1.5*Math.PI,0.5*Math.PI);
gameCanvasContext.lineTo(675,84);
gameCanvasContext.arc(675,67,17,0.5*Math.PI,1.5*Math.PI);
gameCanvasContext.fill();
// End Player 2's Gauge
// The Gauge is 80px + 34px long and 30px tall