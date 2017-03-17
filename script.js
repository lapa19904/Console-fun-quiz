
    function Question(question, answer, correct){
    this.question = question;
    this.answer = answer;
    this.correct = correct;
}

Question.prototype.displayQuestion = function() {
    console.log(this.question);
    for (var i = 0; i < this.answer.length; i++){
        console.log(i + ': ' + this.answer[i]);
    }
    
};

Question.prototype.checkAnswer = function(ans){
    if(ans === this.correct){
        console.log('Good Answer!');
    } else {
        console.log('Bad answer...ty again');
    }
};


var q1 = new Question('Platypus is?',
                     ['amphibian', 'mammal', 'bird', 'fish'], 1);
var q2 = new Question('Platypus is?', ['carnivorus', 'herbivorus', 'omnivorous'], 2);
var q3 = new Question('Platypus lives only in Australia?',
                     ['Yes', 'No'], 0);
var q4 = new Question('Does platypus lay eggs? ',
                     ['No!', 'Yes ofc'], 1);
var q5 = new Question('Is the platypus poisonous? ',
                     ['No!', 'Yes'], 1);
var q6 = new Question('Venom of the platypus can kill a man? ',
                     ['No!', 'Yes ofc'], 0);
var q7 = new Question('Venom of the platypus can kill a dog? ',
                     ['Yes', 'No'], 0);

var questions = [q1, q2, q3, q4, q5, q6, q7];
    
function nextQuestion(){  
var n = Math.floor(Math.random() * questions.length);
questions[n].displayQuestion();
var answer = ( prompt('Please select the correct answer from console question.'));
    if(answer!== 'exit'){
        questions[n].checkAnswer(parseInt(answer));
    nextQuestion();    
    }
}
nextQuestion();
    














