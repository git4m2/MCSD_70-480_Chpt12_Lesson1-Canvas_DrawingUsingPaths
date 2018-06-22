$(document).ready(function () {
    //$('#myCanvas').on('mouseover', displayMouseCoords);
    $('#myCanvas').on('mousemove', displayMouseCoords);
    $('#btnClear').on('click', clearCanvas);
    $('#btnLines').on('click', drawLines);
    $('#btnRectangles').on('click', drawRectangles);
    $('#btnFillStroke').on('click', orderFillStroke);
    $('#btnArcTo').on('click', drawArcTo);
    $('#btnArc').on('click', drawArc);
    $('#btnText').on('click', drawText);
    $('#btnImages').on('click', drawImages);
});

function clearCanvas() {
    $('#txtMouseCoords').val("");

    var canvas = document.getElementById('myCanvas')
        , ctx = canvas.getContext('2d');

    ctx.fillStyle = "#000000";
    ctx.strokeStyle = "#000000";
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function displayMouseCoords(e) {
    //var x = e.pageX;
    //var y = e.pageY;

    var x = e.offsetX;
    var y = e.offsetY;

    $('#txtMouseCoords').val(x + "," + y);
}


function drawLines() {
    clearCanvas();

    var canvas = document.getElementById('myCanvas')
        , ctx = canvas.getContext('2d');

    ctx.fillStyle = 'green';
    ctx.strokeStyle = 'yellow';
    ctx.lineWidth = 10;

    // Draw filled triangle
    ctx.beginPath();
    ctx.moveTo(100, 250);
    ctx.lineTo(150, 350);
    ctx.lineTo(50, 350);
    ctx.closePath();
    ctx.fill();

    // Draw filled triangle
    //ctx.strokeStyle = 'red';
    //ctx.beginPath();
    //ctx.moveTo(210, 250);
    //ctx.lineTo(260, 350);
    //ctx.lineTo(160, 350);
    //ctx.closePath();
    //ctx.fill();
    //ctx.stroke();
    //ctx.strokeStyle = 'yellow';

    // Draw filled traingle inverted with outline
    ctx.beginPath();
    ctx.moveTo(150, 250);
    ctx.lineTo(250, 250);
    ctx.lineTo(200, 350);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();

    // Draw filled triangle with incomplete outline
    ctx.beginPath();
    ctx.moveTo(300, 250);
    ctx.lineTo(350, 350);
    ctx.lineTo(250, 350);
    ctx.fill();
    ctx.stroke();

    // Draw a cross
    ctx.beginPath();
    ctx.moveTo(500, 250);
    ctx.lineTo(500, 350);
    ctx.moveTo(450, 300);
    ctx.lineTo(550, 300);
    ctx.fill(); // Does nothing...
    ctx.stroke();
}

function drawRectangles() {
    clearCanvas();

    var canvas = document.getElementById('myCanvas')
        , ctx = canvas.getContext('2d');

    ctx.fillStyle = 'green';
    ctx.strokeStyle = 'yellow';
    ctx.lineWidth = 10;

    // Triangle
    ctx.beginPath();
    ctx.moveTo(100, 300);
    ctx.lineTo(150, 250);
    ctx.lineTo(200, 300);
    //ctx.closePath();

    // Rectangle
    ctx.rect(100, 300, 100, 100);
    ctx.fill();
    ctx.stroke();
}

function orderFillStroke() {
    clearCanvas();

    var canvas = document.getElementById('myCanvas')
        , ctx = canvas.getContext('2d');

    ctx.fillStyle = 'green';
    ctx.strokeStyle = 'yellow';
    ctx.lineWidth = 10;

    // Fill First - Triangle and Rectangle
    ctx.beginPath();
    ctx.moveTo(100, 300);
    ctx.lineTo(150, 250);
    ctx.lineTo(200, 300);
    ctx.rect(100, 300, 100, 100);
    ctx.fill();
    ctx.stroke();

    // Fill Last - Triangle and Rectangle
    ctx.beginPath();
    ctx.moveTo(300, 300);
    ctx.lineTo(350, 250);
    ctx.lineTo(400, 300);
    ctx.rect(300, 300, 100, 100);
    ctx.stroke();
    ctx.fill();
}

function drawArcTo() {
    clearCanvas();

    var canvas = document.getElementById('myCanvas')
        , ctx = canvas.getContext('2d');

    ctx.strokeStyle = 'gray';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(300, 200);
    ctx.lineTo(400, 500);
    //ctx.lineTo(600, 300);
    ctx.lineTo(750, 150);
    ctx.stroke();

    ctx.strokeStyle = 'black';
    ctx.lineWidth = 5;
    ctx.beginPath();
    ctx.moveTo(300, 200);
    ctx.arcTo(400, 500, 600, 300, 50);
    ctx.stroke();

    ctx.strokeStyle = 'red';
    ctx.lineWidth = 5;
    ctx.beginPath();
    ctx.moveTo(300, 200);
    ctx.arcTo(400, 500, 600, 300, 300);
    ctx.stroke();
}

function drawArc() {
    clearCanvas();

    var canvas = document.getElementById('myCanvas')
        , ctx = canvas.getContext('2d');

    ctx.strokeStyle = 'blue';
    ctx.fillStyle = 'yellow';
    ctx.lineWidth = 5;
    ctx.beginPath();
    ctx.arc(400, 300, 100, 0, 1.5 * Math.PI);
    ctx.fill();
    ctx.stroke();
}

function drawText() {
    clearCanvas();

    var canvas = document.getElementById('myCanvas')
        , ctx = canvas.getContext('2d');

    ctx.lineWidth = 2;
    ctx.strokeStyle = 'magenta';

    ctx.beginPath();
    ctx.moveTo(100, 300);
    ctx.lineTo(700, 300);
    ctx.stroke();

    ctx.lineWidth = 5;
    ctx.strokeStyle = 'blue';
    ctx.fillStyle = 'yellow';
    ctx.font = "bold 100pt TimesNewRoman";
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';

    ctx.fillText("Hello", 400, 300);
    ctx.strokeText("Hello", 400, 300);
}

function drawImages() {
    clearCanvas();

    var canvas = document.getElementById('myCanvas')
        , ctx = canvas.getContext('2d');

    var img = new Image();
    img.src = "images/IceBoat.jpg";
    img.onload = function () {
        //ctx.drawImage(img, 0, 0);
        //ctx.drawImage(img, 0, 0, 300, 400);
        ctx.drawImage(img, 175, 0, 450, 600);

        ctx.font = 'bold 24pt Arial';

        // Draw "Mast" line
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(325, 180);
        ctx.lineTo(440, 180);
        ctx.stroke();

        // Draw "Mast" text
        ctx.strokeStyle = 'white';
        ctx.lineWidth = 1;
        ctx.textAlign = 'right';
        ctx.textBaseline = 'middle';
        ctx.fillText('Mast', 325, 180);
        ctx.strokeText('Mast', 325, 180);

        // Draw "Sail" line
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(325, 30);
        ctx.lineTo(500, 30);
        ctx.stroke();

        // Draw "Sail" text
        ctx.strokeStyle = 'white';
        ctx.lineWidth = 1;
        ctx.textAlign = 'right';
        ctx.textBaseline = 'middle';
        ctx.fillText('Sail', 325, 30);
        ctx.strokeText('Sail', 325, 30);

        // Draw "Boom" line
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(325, 130);
        ctx.lineTo(540, 130);
        ctx.stroke();

        // Draw "Boom" text
        ctx.strokeStyle = 'white';
        ctx.lineWidth = 1;
        ctx.textAlign = 'right';
        ctx.textBaseline = 'middle';
        ctx.fillText('Boom', 325, 130);
        ctx.strokeText('Boom', 325, 130);
    }
}