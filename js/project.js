

$(document).ready(function () {
    $('.tile').click(function () {
        let playerOneArr = []; // player one will be default X
        let playerTwoArr = []; // player two will be default O
        $('.tile').text('X'); // make this alternating
        playerOneArr.push($(this).attr('id'));
        console.log(playerOneArr);
    })
});

// if player one, if player two function
