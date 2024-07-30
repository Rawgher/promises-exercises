// prompt 1
async function prompt1() {
    let data = await $.getJSON('https://deckofcardsapi.com/api/deck/new/draw')
    console.log(data.cards[0].value.toLowerCase() + ' of ' + data.cards[0].suit.toLowerCase())
}

prompt1();


// prompt 2
let cardOne = null;

async function prompt2() {
    let deck = await $.getJSON('https://deckofcardsapi.com/api/deck/new/draw')
    cardOne = deck.cards[0];
    let deckId = deck.deck_id;

    let draw = await $.getJSON(`https://deckofcardsapi.com/api/deck/${deckId}/draw`);

    let cardTwo = draw.cards[0];
    [cardOne, cardTwo].forEach((card) => {
        console.log(card.value.toLowerCase() + ' of ' + card.suit.toLowerCase())
    })
}

prompt2();



// prompt 3
let deckId = null;
$('#draw').hide();
async function prompt3() {
    let deck = await $.getJSON('https://deckofcardsapi.com/api/deck/new/shuffle')
    deckId = deck.deck_id;
    $('#draw').show();

    $('#draw').on('click', async function() {
        let card = await $.getJSON(`https://deckofcardsapi.com/api/deck/${deckId}/draw`)
        let cardImg = card.cards[0].image;
        $('#card-div').prepend('<img src="' + cardImg + '">')
        if (card.remaining === 0) $('#draw').hide();
    })
}

prompt3();