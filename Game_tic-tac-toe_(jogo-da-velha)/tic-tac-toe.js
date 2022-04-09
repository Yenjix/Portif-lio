var player, winner = null;
var playerSelected = document.getElementById('select-player')
var winnerSelected = document.getElementById('select-winner')

changePlayer('X');

function chooseSquare(id) {
    if (winner !== null) {
        return;
    }
    
    var square = document.getElementById(id);
    if(square.innerHTML !== '-'){
        return;
    }

    square.innerHTML = player;
    square.style.color = '#000';    

    if (player === 'X') {
        player = 'O';
    } else {
        player = 'X';
    }

    changePlayer(player);
    winnerCheck();
}


function changePlayer(value) {
    player = value;
    playerSelected.innerHTML = player;
}


function winnerCheck() {
    var square1 = document.getElementById(1)
    var square2 = document.getElementById(2)
    var square3 = document.getElementById(3)
    var square4 = document.getElementById(4)
    var square5 = document.getElementById(5)
    var square6 = document.getElementById(6)
    var square7 = document.getElementById(7)
    var square8 = document.getElementById(8)
    var square9 = document.getElementById(9)

    if (squareSequence(square1, square2, square3)){
        squareColorChange(square1, square2, square3);
        winnerChange(square1);
        return;
    }

    if (squareSequence(square4, square5, square6)){
        squareColorChange(square4, square5, square6);
        winnerChange(square4);
        return;
    }

    if (squareSequence(square7, square8, square9)){
        squareColorChange(square7, square8, square9);
        winnerChange(square7);
        return;
    }

    if (squareSequence(square1, square4, square7)){
        squareColorChange(square1, square4, square7);
        winnerChange(square1);
        return;
    }

    if (squareSequence(square2, square5, square8)){
        squareColorChange(square2, square5, square8);
        winnerChange(square2);
        return;
    }

    if (squareSequence(square3, square6, square9)){
        squareColorChange(square3, square6, square9);
        winnerChange(square3);
        return;
    }

    if (squareSequence(square3, square5, square7)){
        squareColorChange(square3, square5, square7);
        winnerChange(square3);
        return;
    }

    if (squareSequence(square1, square5, square9)){
        squareColorChange(square1, square5, square9);
        winnerChange(square1);
    }
}


function winnerChange(square) {
    winner = square.innerHTML;
    winnerSelected.innerHTML = winner;
}


function squareColorChange(square1, square2, square3) {
    square1.style.backgroundColor = '#0f0';
    square2.style.backgroundColor = '#0f0';
    square3.style.backgroundColor = '#0f0';
}


function squareSequence(square1, square2, square3) {
    var isEqual = false;
    
    if(square1.innerHTML !== '-' && square1.innerHTML === square2.innerHTML && square2.innerHTML === square3.innerHTML) {
        isEqual = true;
    }

    return isEqual;
}


function restart(){
    winner = null;
    winnerSelected.innerHTML = '';

    for (var i = 1; i <= 9; i++){
        var square = document.getElementById(i)
        square.style.backgroundColor = '#9b9898';
        square.style.color = '#9b9898';
        square.innerHTML = '-'
    }

    changePlayer('X');
}