const checkForWin = function (arr) { // to determine if the player won
    let combos = [[1, 2, 3], [3, 6, 9], [1, 4, 7], [7, 8, 9], [1, 5, 9], [3, 5, 7], [2, 5, 8], [4, 5, 6]]; // winning arrays
    if (checkEquality(arr, combos) === true) {
        $('.win').css('visibility','visible'); // displays You Won! when win
        $('.win').addClass('animate');
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

const characterIsChecked = function () { 
    if ($('input[name=character1]:checked', '#p1Form').attr('id') === 'bat1') {
        $('#bat2').attr('disabled',true);
    } else if ($('input[name=character1]:checked', '#p1Form').attr('id') === 'cat1') {
        $('#cat2').attr('disabled',true);
    } else if ($('input[name=character2]:checked', '#p2Form').attr('id') === 'bat2') {
        $('#bat1').attr('disabled',true);
    } else if ($('input[name=character2]:checked', '#p2Form').attr('id') === 'cat2') {
        $('#cat1').attr('disabled',true);
    }
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
            $('.draw').addClass('animate');
        }
        function $playerOne(tile) {
            const character1Choice = $('input[name=character1]:checked', '#p1Form').val();
            if ($(tile).text() == ''
            && character1Choice === "bats1") {
                $(tile).html('<img src="https://cdn.pixabay.com/photo/2016/04/01/11/13/animal-1300257_960_720.png">'); 
                playerOneArr.push(Number($(tile).attr('id')));
                $('#player1').css('font-weight','normal');
                $('#player1').css('color','darkgray');
                $('#player2').css('color','orange');
                $('#player2').css('font-weight','bold');
            } else if ($(tile).text() == '' 
            && character1Choice === "cats1") {
                $(tile).html('<img src="https://cdn.pixabay.com/photo/2013/07/12/16/38/halloween-151310_960_720.png" style="width:100px;height:auto;">'); 
                playerOneArr.push(Number($(tile).attr('id')));
                $('#player1').css('font-weight','normal');
                $('#player1').css('color','darkgray');
                $('#player2').css('color','orange');
                $('#player2').css('font-weight','bold');
            } else {
                count = count - 1;
            }
            console.log(playerOneArr);
        }
        function $playerTwo (tile) {
            const character2Choice = $('input[name=character2]:checked', '#p2Form').val();
            if ($(tile).text() == '' 
            && character2Choice === "bats2") {
                $(tile).html('<img src="https://cdn.pixabay.com/photo/2016/04/01/11/13/animal-1300257_960_720.png">'); 
                playerTwoArr.push(Number($(tile).attr('id')));
                $('#player2').css('font-weight','normal');
                $('#player2').css('color','darkgray');
                $('#player1').css('color','orange');
                $('#player1').css('font-weight','bold');
            } else if ($(tile).text() == '' 
            && character2Choice === "cats2"){
                $(tile).html('<img src="https://cdn.pixabay.com/photo/2013/07/12/16/38/halloween-151310_960_720.png" style="width:100px;height:auto;">'); 
                playerTwoArr.push(Number($(tile).attr('id')));
                $('#player2').css('font-weight','normal');
                $('#player2').css('color','darkgray');
                $('#player1').css('color','orange');
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
        $('#player1').css('font-weight','bold');
        $('#player1').css('color','orange');
        $('#player2').css('font-weight','normal');
        $('#player2').css('color','darkgray');
        $('.win').css('visibility','hidden');
        count = 0;
        playerOneArr = []; 
        playerTwoArr = []; 
    });
    $('#submit1').click(function () {
        const p1Name = $('#p1n').val();
        $('#player1').html(p1Name);
    });  
    $('#submit2').click(function () {
        const p2Name = $('#p2n').val();
        $('#player2').html(p2Name);
    });
    $('#resetname').click(function () {
        $('#player1').html('');
        $("input:radio[name='character1']").prop('checked',false);
        $("input:radio[name='character2']").attr('disabled',false);
    });
    $('#resetname2').click(function () {
        $('#player2').html('');
        $("input:radio[name='character2']").prop('checked',false);
        $("input:radio[name='character1']").attr('disabled',false);
    });
    $('#ply').click(function () {
        if ($('#player1').html() !== '' 
        && $('#player2').html() !== '' 
        && $("input:radio[name='character1']").is(':checked') 
        && $("input:radio[name='character2']").is(':checked')) {
            $('.popup').fadeOut(1300);
        } else {
            $('.invalidname').css('visibility','visible');
        }
    });
    $('#bat1').click(characterIsChecked);
    $('#cat1').click(characterIsChecked);
    $('#bat2').click(characterIsChecked);
    $('#cat2').click(characterIsChecked);
    $('.burning').burn();
    $(target).burn('diffusion', 2);
});



$(document).ready(function() {
    $('.burning').burn();
    $(target).burn('diffusion', 2);
});

// only select one character
// make everything work on mobile
