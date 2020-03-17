$(document).ready(function(){
  $('#time').load("index.html", function() {
      $(this).hide();
  });
  var questions = [{question: "1.jQuery is a ?",
             answers: ["JavaScrip-tLibrary", "JavaScript-Language", "JavaScript-Method", "PHP-Method"],
             correctAnswer: 0
                 },
            {   question: "2. Which jQuery method is used to hide selected elements?",
            answers: [" hidden()", "hide()", "visible(false)", "display(none)"],
            correctAnswer: 1
        }, {
            question: "3. Which jQuery method is used to set one or more style properties for selected elements",
            answers: ["css()", " html()", "style()", "method()"],
            correctAnswer: 0
        }, {
            question: "4. What scripting language is jQuery written in?",
            answers: ["VBScript", "JavaScript", "C#", "C++"],
            correctAnswer: 1
        }, {
            question: "5. Which jQuery method should be used to deal with name conflicts?",
            answers: ["noNameConflict()", "noConflict()", "nameConflict()", "conflict()"],
            correctAnswer: 3
        }];
  let questionCounter = 0;
  let selections = [];
  let quiz = $('#quiz');
//time counter



//var timer = null;


  //ok
  $('#btnstart').click(function(e){
   e.preventDefault();
    $('#btnstart').hide();
    $('.massage').hide();
    $('#time').show();
    $('#scoreitem').hide();
   questionCounter = 0;
    selections = [];
    showQuestion();
          });  

  $('#next').click(function(e){
    e.preventDefault();
    choose();
    questionCounter++;
    showQuestion();
    $('#score').hide();
  });

  $('#prev').click(function(e){
    e.preventDefault();
    choose();
    questionCounter--;
    showQuestion();
    $('#score').hide();
  });

  $('#start').click(function(e){
    e.preventDefault();
    questionCounter = 0;
    selections = [];
    showQuestion();
    $('#start').hide(); 
    $('#score').hide();
    
  });

function createQuestionElement(index){
  let questionElement = $("<div>", {
    id: "question" });
  let question = $("<p>").append(questions[index].question);
  questionElement.append(question);

  let radioButtons = createRadios(index);
  questionElement.append(radioButtons);
  return questionElement;
  };
  
function createRadios(index){
 let form = $("<form>");
  for(let i=0; i< questions[index].answers.length; i++){
    let item = $("<div>", {
      class: "optbtn"
    });
   // let  input ='<label>' + '<input type="button" class="optbtn" name="answer" value='+questions[index].answers[i]+' >'+'</label>'
 let  input ='<label>' + '<input type="radio" name="answer" value='+i+' >'+questions[index].answers[i]+'</label>';
    item.append(input);
   form.append(item);
  }
return form;
}
$('.optbtn').click(function(e){
  e.preventDefault();
  $(this).css({"backgroundColor" : "blue"});
});

function choose(){
  selections[questionCounter] = +$('input[name="answer"]:checked').val();
}
function showQuestion(){
  quiz.fadeOut(function(){
    $('#question').remove();
    if(questionCounter < questions.length){
      var nextQuestion = createQuestionElement(questionCounter);
      quiz.append(nextQuestion).fadeIn();
      if(questionCounter === 1){
        $('#prev').show();
      }else if(questionCounter === 0){
        $('#prev').hide();
        $('#next').show();
        $('#score').hide();
      }
    }else{
      let scoreElement = displayScore();
      quiz.append(scoreElement).fadeIn();
      $('#next').hide();
      $('#prev').hide();
      $('#start').show();
      $('#score').hide();
     
    }
  });
}
var count =20
var interval = setInterval(function(){
    $("#timer").html(count);
    count--;
    if(count === 0){
      clearInterval(interval);
      $("#timer").html("Done");
      $('#start').show();
      $('#quiz').hide();
      
    }
  },1000);

function displayScore(){
let score = $('<h4>',{id:'#score'});
let numCorrect = 0;
for(let i=0; i< selections.length; i++){
  if(selections[i]=== questions[i].correctAnswer){
    numCorrect++;
  }
}
score.append('Your Score is :  '+numCorrect );
return score;

}
});
