// your code here!
$('#text-analyse').submit(function (event) {
    event.preventDefault();
    var inputText = $(event.currentTarget).find('textarea[name="user-text"]').val();
    console.log(inputText);
    console.log(countWords(inputText));
    displayResult(countWords(inputText));
});

function countWords(text){
    var sum = 1;
    for(var i = 0; i < text.length; i++){
        if(text[i] == " ") {
            sum += 1;
        }
    }

    return sum;
}

function displayResult(lenght) {
    $('dl').removeClass('hidden');
    $('.js-word-count').text(lenght);
}