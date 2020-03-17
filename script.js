$(document).ready(function(){
   
    $('#btnstart').click(function(){
        $('#choice').show();
        $('#quizescore').show();
        $('#btnstart').hide();
        });
        var questions = [{
            question: "1.jQuery is a ?",
            choices: ["JavaScript Library", "JavaScript Language", "JavaScript Method", "PHP Method"],
            correctAnswer: 0
        }, {
            question: "2. Which jQuery method is used to hide selected elements?",
            choices: [" hidden()", "hide()", "visible(false)", "display(none)"],
            correctAnswer: 1
        }, {
            question: "3. Which jQuery method is used to set one or more style properties for selected elements",
            choices: ["css()", " html()", "style()", "method()"],
            correctAnswer: 0
        }, {
            question: "4. What scripting language is jQuery written in?",
            choices: ["VBScript", "JavaScript", "C#", "C++"],
            correctAnswer: 1
        }, {
            question: "5. Which jQuery method should be used to deal with name conflicts?",
            choices: ["noNameConflict()", "noConflict()", "nameConflict()", "conflict()"],
            correctAnswer: 3
        }]


});