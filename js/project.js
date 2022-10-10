const checkForWin = function (arr) {
    let win1 = [1, 2, 3];
    let win2 = [3, 6, 9];
    let win3 = [1, 4, 7];
    let win4 = [7, 8, 9];
    let win5 = [1, 5, 9];
    let win6 = [3, 5, 7];
    let win7 = [2, 5, 8];
    let win8 = [4, 5, 6];
    if (checkEquality(arr, win1) === true) {
        console.log('yay');
    }
}

const checkEquality = function (x,y){
    for (i=0;i<x.length;i++) {
        let xArray = x.sort();
        let yArray = y.sort();
        if (xArray[i] === yArray[i] && xArray.length === yArray.length) {
            return false;
        } else {
            return true;
        }
    }
}

$(document).ready(function () {
    let count = 0;
    let playerOneArr = []; 
    let playerTwoArr = []; 
    $('.tile').click(function () {
        count++;
        if (count % 2) {
            $playerOne(this);
            checkForWin(playerOneArr);
        } else {
            $playerTwo(this);
            checkForWin(playerTwoArr);
        }
        function $playerOne(tile) {
            $(tile).text('X'); // player one will be default X
            playerOneArr.push(Number($(tile).attr('id')));
            console.log(playerOneArr);
            
        }
        function $playerTwo (tile) {
            $(tile).text('O'); // player two will be default O
            playerTwoArr.push(Number($(tile).attr('id')));
            console.log(playerTwoArr);
        }
    })
});

