// your code here!
$('#text-analyse').submit(function (event) {
    event.preventDefault();
    var inputText = $(event.currentTarget).find('textarea[name="user-text"]').val();
    console.log(inputText);
    console.log(countWords(inputText));
    displayResult(countWords(inputText));
    uniqueWords(inputText);
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

function uniqueWords(text) {
    var word = "";
    var array = [];
    var index = 0;
    for(var i = 0; i < text.length; i++){
        if(text[i] != " ") {
            word += text[i];
        }else if(text[i] == " "){
            array[index++] = word;
            word = "";
        }
    }
}

function displayResult(lenght) {
    $('dl').removeClass('hidden');
    $('.js-word-count').text(lenght);
}