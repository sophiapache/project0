const checkForWin = function (arr) { // to determine if the player won
    let combos = [[1, 2, 3], [3, 6, 9], [1, 4, 7], [7, 8, 9], [1, 5, 9], [3, 5, 7], [2, 5, 8], [4, 5, 6]]; // winning arrays
    if (checkEquality(arr, combos)) { // returns true if player wins
        $('.win').css('visibility','visible'); // displays You Won! when win
        $('.win').addClass('animate');
        $('.tile').off('click'); // turns off the event listener
        return true;
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

const characterIsChecked = function () { 
    // disables corresponding input for other player
    const clickedID = $(this).attr('id');
    const animal = clickedID.slice(0, -1);
    const player = clickedID[3] // index 3 is last element
    let otherPlayer = player === '1' ? '2' : '1'; // ternary operator is shortand if... else statement
    $('#' + animal + otherPlayer).attr('disabled', true);
}

$(document).ready(function () {
    let count = 0; // variables that will be manipulated throughout the game
    let playerOneArr = []; 
    let playerTwoArr = []; 
    combos = [[1, 2, 3], [3, 6, 9], [1, 4, 7], [7, 8, 9], [1, 5, 9], [3, 5, 7], [2, 5, 8], [4, 5, 6]];
    $('#player2').css('font-weight','normal');
    $('#player2').css('color','darkgray');
    $('#player1').css('color','orange');
    $('#player1').css('font-weight','bold');
    const gamePlay = function () {
        count++; // to make alternate turns
        if (count % 2) {
            $playerOne(this); // each player's turn but also check if the player has won
            checkForWin(playerOneArr);
            if (checkForWin(playerOneArr)) {
                $('#player1').css('color','orange');
                $('#player1').css('font-weight','bold');
                $('#player2').css('font-weight','normal'); // changes CSS for the text color changing depending on player's turn
                $('#player2').css('color','darkgray');
            }
        } else {
            $playerTwo(this);
            checkForWin(playerTwoArr);
            if (checkForWin(playerTwoArr)) {
                $('#player2').css('color','orange');
                $('#player2').css('font-weight','bold');
                $('#player1').css('font-weight','normal');
                $('#player1').css('color','darkgray');
            }
        }
        if (count === 9 && checkEquality(playerOneArr, combos) === false && checkEquality(playerTwoArr, combos) === false) {
            $('.draw').css('visibility','visible'); // check for draw
            $('.draw').addClass('animate');
        }
        function $playerOne(tile) { // player one's turn
            const character1Choice = $('input[name=character1]:checked', '#p1Form').val();
            $('#player1').css('font-weight','normal');
            $('#player1').css('color','darkgray');
            $('#player2').css('color','orange');
            $('#player2').css('font-weight','bold');
            if ($(tile).html() == ''
            && character1Choice === "bats1") { // this makes it so user can't press occupied tile and if they chose a certain character, their tile image will reflect that
                $(tile).html('<img src="https://cdn.pixabay.com/photo/2016/04/01/11/13/animal-1300257_960_720.png">'); 
                playerOneArr.push(Number($(tile).attr('id')));
            } else if ($(tile).html() == '' 
            && character1Choice === "cats1") { // this makes it so user can't press occupied tile and if they chose a certain character, their tile image will reflect that
                $(tile).html('<img src="https://cdn.pixabay.com/photo/2013/07/12/16/38/halloween-151310_960_720.png" style="width:100px;height:auto;">'); 
                playerOneArr.push(Number($(tile).attr('id')));
            } else { // if user presses on occupied tile it won't count as a turn
                count = count - 1;
            }
        }
        function $playerTwo (tile) { // player two's turn
                $('#player2').css('font-weight','normal'); // changes CSS for the text color changing depending on player's turn
                $('#player2').css('color','darkgray');
                $('#player1').css('color','orange');
                $('#player1').css('font-weight','bold');
            const character2Choice = $('input[name=character2]:checked', '#p2Form').val();
            if ($(tile).html() == '' 
            && character2Choice === "bats2") { // this makes it so user can't press occupied tile and if they chose a certain character, their tile image will reflect that
                $(tile).html('<img src="https://cdn.pixabay.com/photo/2016/04/01/11/13/animal-1300257_960_720.png">'); 
                playerTwoArr.push(Number($(tile).attr('id'))); // push player's choice into the array
            } else if ($(tile).html() == '' 
            && character2Choice === "cats2"){ // this makes it so user can't press occupied tile and if they chose a certain character, their tile image will reflect that
                $(tile).html('<img src="https://cdn.pixabay.com/photo/2013/07/12/16/38/halloween-151310_960_720.png" style="width:100px;height:auto;">'); 
                playerTwoArr.push(Number($(tile).attr('id'))); // push player's choice into the array

            } else {
                count = count - 1; // if user presses on occupied tile it won't count as a turn
            }
        }
    } 
    $('.tile').click(gamePlay);
    $('#reset').click(function() { // this button resets the game
        $('.tile').on('click', gamePlay);
        $('.tile').text('');
        $('#player1').css('font-weight','bold');
        $('#player1').css('color','orange');
        $('#player2').css('font-weight','normal');
        $('#player2').css('color','darkgray');
        $('.win').css('visibility','hidden');
        $('.draw').css('visibility','hidden');
        count = 0;
        playerOneArr = []; 
        playerTwoArr = []; // all the things the game needs to default back to original settings
    });
    $('#submit1').click(function () { // submits player one's name
        const p1Name = $('#p1n').val(); 
        $('#player1').html(p1Name);
    });  
    $('#submit2').click(function () { // submits player two's name
        const p2Name = $('#p2n').val();
        $('#player2').html(p2Name);
    });
    $('#resetname').click(function () { // resets character choice and player name
        $('#player1').html('');
        $("input:radio[name='character1']").prop('checked',false);
        $("input:radio[name='character2']").attr('disabled',false);
    });
    $('#resetname2').click(function () { // resets second character choice and player name
        $('#player2').html('');
        $("input:radio[name='character2']").prop('checked',false);
        $("input:radio[name='character1']").attr('disabled',false);
    });
    $('#ply').click(function () { // name and character have to be chosen before playing
        if ($('#player1').html() !== '' 
        && $('#player2').html() !== '' 
        && $("input:radio[name='character1']").is(':checked') 
        && $("input:radio[name='character2']").is(':checked')) {
            $('.popup').fadeOut(1300);
        } else {
            $('.invalidname').css('visibility','visible');
        }
    });
    $('.animal-input').click(characterIsChecked); // disables corresponding input for other player
    $('.burning').burn();
    $('.header').burn('diffusion', 2); // adds burning effect to header
});



