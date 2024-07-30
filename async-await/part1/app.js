// prompt 1
async function prompt1() {
    let data = await $.getJSON('http://numbersapi.com/3?json')
    $('#p1-div').append('<p>' + data.text + '</p>')
}

prompt1();



// prompt 2
async function prompt2() {
    let data = await $.getJSON('http://numbersapi.com/3,5,7,11?json')
    $.each(data, function(key, value) {
        $('#p2-div').append('<p>' + value + '</p>');
    });
}

prompt2();



// prompt 3
async function prompt3() {
    let dataPoints = await Promise.all(
        Array.from({length : 4}, () => $.getJSON('http://numbersapi.com/7?json'))
    );
    dataPoints.forEach(data => {
        $('#p3-div').append('<p>' + data.text + '</p>')
    });
}

prompt3();