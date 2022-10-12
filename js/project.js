const checkForWin = function (arr) { // to determine if the player won
    let combos = [[1, 2, 3], [3, 6, 9], [1, 4, 7], [7, 8, 9], [1, 5, 9], [3, 5, 7], [2, 5, 8], [4, 5, 6]]; // winning arrays
    if (checkEquality(arr, combos) === true) {
        $('.win').css('visibility','visible'); // displays You Won! when win
        $('.tile').off('click'); // turns off the event listener
    }
}

const checkEquality = function (array, combo){ // to check if array contents are equal
    for (i=0;i<combo.length;i++) {
        let wins = combo[i];
        if (array.includes(wins[0]) && array.includes(wins[1]) && array.includes(wins[2])) {
            return true;
        } 
    } return false;
}


$(document).ready(function () {
    let count = 0;
    let playerOneArr = []; 
    let playerTwoArr = []; 
    $('#player1').css('font-weight','bold');
    const gamePlay = function () {
        count++; // to make alternate turns
        if (count % 2) {
            $playerOne(this);
            checkForWin(playerOneArr);
        } else {
            $playerTwo(this);
            checkForWin(playerTwoArr);
        }
        if (count === 9) {
            $('.draw').css('visibility','visible');
        }
        function $playerOne(tile) {
            if ($(tile).text() == '') {
                $(tile).text('X'); // player two will be default O
                playerOneArr.push(Number($(tile).attr('id')));
                $('#player1').css('font-weight','normal');
                $('#player2').css('font-weight','bold');
            } else {
                count = count - 1;
            }
            console.log(playerOneArr);
        }
        function $playerTwo (tile) {
            if ($(tile).text() == '') {
                $(tile).text('O'); // player two will be default O
                playerTwoArr.push(Number($(tile).attr('id')));
                $('#player2').css('font-weight','normal');
                $('#player1').css('font-weight','bold');
            } else {
                count = count - 1;
            }
            console.log(playerTwoArr);
        }
    } 
    $('.tile').click(gamePlay);
    $('#reset').click(function() { // this button resets the game
        $('.tile').on('click', gamePlay);
        $('.tile').text('');
        $('#player2').css('font-weight','bold');
        $('#player1').css('font-weight','normal');
        $('.win').css('visibility','hidden');
        count = 0;
        playerOneArr = []; 
        playerTwoArr = []; 
    })
});
