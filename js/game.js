const player1 = "X";
const player2 = "O";
var playerTurn = player1;
var gameOver = false;


updateIndex();
startSquare();

function updateIndex() {
    if (gameOver) {
        return;
    }

    if (playerTurn == player1) {
        var div = document.getElementById('playerTurn');
        div.innerHTML = 'PLAYER: 1';
    }

    else {
        var div = document.getElementById('playerTurn');
        div.innerHTML = 'PLAYER: 2';
    }
}

function startSquare() {
    var square = document.getElementsByClassName('square');

    for (var i = 0; i < square.length; i++) {

        square[i].addEventListener('click', function () {

            if (gameOver) {
                return;
            }

            if (this.getElementsByTagName('img'.length == 0)) {
                if (playerTurn == player1) {
                    this.innerHTML = "<img src='img/X.png'>";
                    this.setAttribute("move", player1);
                    playerTurn = player2;
                }

                else {
                    this.innerHTML = "<img src='img/O.png'>";
                    this.setAttribute("move", player2);
                    playerTurn = player1;
                }
                updateIndex();
            }
        });
    }
}