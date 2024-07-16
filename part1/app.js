// prompt 1
$.getJSON('http://numbersapi.com/3?json').then(data => {
    console.log('part1', data);
    $('#p1-div').append('<p>' + data.text + '</p>')
})



// prompt 2
$.getJSON('http://numbersapi.com/3,5,7,11?json').then(data => {
    console.log('part2', data);
    $.each(data, function(key, value) {
        $('#p2-div').append('<p>' + value + '</p>');
    });
})




// prompt 3
Promise.all(
    Array.from({length : 4}, () => {
        $.getJSON('http://numbersapi.com/7?json').then(data => {
            console.log('part3', data);
            $('#p3-div').append('<p>' + data.text + '</p>')
        })
    })
)