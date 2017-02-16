// your code here!
$('#text-analyse').submit(function (event) {
    event.preventDefault();
    var inputText = $(event.currentTarget).find('textarea[name="user-text"]').val();
    console.log(inputText);
    console.log(countWords(inputText));
    displayResult(inputText.length)
});

function countWords(text){
    for(var i = 0; i < text.length; i++){

    }
}

function displayResult(lenght) {
    $('dl').removeClass('hidden');
    $('.js-word-count').text(lenght);
}