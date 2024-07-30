

// prompt 1
$.getJSON('https://deckofcardsapi.com/api/deck/new/draw').then(data => {
    console.log(data.cards[0].value.toLowerCase() + ' of ' + data.cards[0].suit.toLowerCase())
})



// prompt 2
let cardOne = null;
$.getJSON('https://deckofcardsapi.com/api/deck/new/draw').then(data => {
    cardOne = data.cards[0];
    let deckId = data.deck_id;
    return $.getJSON(`https://deckofcardsapi.com/api/deck/${deckId}/draw`);
}).then(data => {
    let cardTwo = data.cards[0];
    [cardOne, cardTwo].forEach((card) => {
        console.log(card.value.toLowerCase() + ' of ' + card.suit.toLowerCase())
    })

}) 



// prompt 3
let deckId = null;
$('#draw').hide();

$.getJSON('https://deckofcardsapi.com/api/deck/new/shuffle').then(data => {
    deckId = data.deck_id;
    $('#draw').show();
})

$('#draw').on('click', function() {
    $.getJSON(`https://deckofcardsapi.com/api/deck/${deckId}/draw`).then(data => {
        let cardImg = data.cards[0].image;
        $('#card-div').prepend('<img src="' + cardImg + '">')
        if (data.remaining === 0) $('#draw').hide();
    });
})