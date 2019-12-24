const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');

function buildQuiz(){}

function showResults(){}

// display quiz right away
buildQuiz();

// on submit, show results
submitButton.addEventListener('click', showResults);

const myQuestions = [
    {
      question: " What is the HTML tag under which one can write the JavaScript code?",
      answers: {
        a: "<javascript>",
        b: "<scripted>",
        c: "<script>, obviously",
        d:"<js>"
      },
      correctAnswer: "c",
      explanation:" If we want to write a JavaScript code under HTML tag, you will have to use the “script” tag."
    },
    {
      question: "Choose the correct JavaScript syntax to change the content of the<br> following HTML code:<br><p id=&quot; scientist &quot;>Rocketman of India</p>",
      answers: {
        a: "document.getElement(“scientist”).innerHTML=”Rocketman of India;",
        b: "document.getElementById(“scientist”).innerHTML=”Rocketman of India;",
        c: "document.getId(“scientist”)=”Rocketman of India;",
        d: "document.getElementById(“scientist”).innerHTML=Rocketman of India;"
      },
      correctAnswer: "b",
      explanation:"The correct syntax to access the element is <br>document.getElementById(“scientist”)<br>. Here we want to access the content written under that id, so we used .innerHTML <br> to specify that and finally we replaced the content with<br> whatever is written inside the quotes."
    },
    {
      question: "Which of the following is the correct syntax to <br> display “GOG” in an alert box using JavaScript?",
      answers: {
        a: "alertbox(“GOG”);",
        b: "msg(“GOG”);",
        c: "msgbox(“GOG”);",
        d: "alert(“GOG”);"
      },
      correctAnswer: "d",
      explanation: "To display any text in the alert box, you need to <br>write it as alert(“GOG”);"
    },
    {
        question: " What is the correct syntax for referring<br> to an external <br>script called “progate.js”?",
        answers: {
          a: "<script src=”progate.js”>",
          b: "<script href=”progate.js”>",
          c: "<script ref=”progate.js”>",
          d: "<script name=”progate.js”>"
        },
        correctAnswer: "a",
        explanation: "<script name=”progate.js”>"
      },
      {
        question: "Which of the following is not a reserved word in JavaScript?",
        answers: {
          a: "interface",
          b: "throws",
          c: "program",
          d: "short"
        },
        correctAnswer: "c",
        explanation: "In JavaScript, interface, throws and short are reserved keywords."
      }, 
      {
        question: "Predict the output of the following JavaScript code.<br>var a = &quot; BlackSheep &quot; <br>var result = a.substring(4, 5);<br> document.write(result);<br></script> ",
        answers: {
          a: "sf",
          b: "ks",
          c: "s",
          d: "k"
        },
        correctAnswer: "c",
        explanation: " The substring command selects the substring starting from 4 to 5,<br> excluding the 5th index. The indexing starts from 0. <br>So, the output here is just “s” rather than sf."
      }, 
      {
        question: "Predict the output of the following JavaScript code.<br>var x=5;<br>var y=6;<br>var res=eval(&quot; x*y &quot;);<br> document.write(res);<br></script>",
        answers: {
          a: "&quot; 30 &quot;",
          b: "30",
          c: "5*6",
          d: "&quot; 5*67 quot;"
        },
        correctAnswer: "c",
        explanation: " The substring command selects the substring starting from 4 to 5,<br> excluding the 5th index. The indexing starts from 0. <br>So, the output here is just “s” rather than sf."
      }, 
      {
        question: "Predict the output of the following JavaScript code.<br><script type= &quot; text/javascript &quot;> <br>a = 8 + &quot; 8 &quot; <br>var res=eval(&quot; x*y &quot;);<br> ",
        answers: {
          a: "sf",
          b: "ks",
          c: "s",
          d: "k"
        },
        correctAnswer: "c",
        explanation: " The substring command selects the substring starting from 4 to 5,<br> excluding the 5th index. The indexing starts from 0. <br>So, the output here is just “s” rather than sf."
      }, 
  ];
  function buildQuiz(){
    // we'll need a place to store the HTML output
    const output = [];
  
    // for each question...
    myQuestions.forEach(
      (currentQuestion, questionNumber) => {
  
        // we'll want to store the list of answer choices
        const answers = [];
  
        // and for each available answer...
        for(letter in currentQuestion.answers){
  
          // ...add an HTML radio button
          answers.push(
            `<label>
              <input type="radio" name="question${questionNumber}" value="${letter}">
              ${letter} :
              ${currentQuestion.answers[letter]}
            </label>`
          );
        }
  
        // add this question and its answers to the output
        output.push(
          `<div class="question"> ${currentQuestion.question} </div>
          <div class="answers"> ${answers.join('')} </div>`
        );
      }
    );
  
    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join('');
  }
  myQuestions.forEach( (currentQuestion, questionNumber) => {
    // here goes the code we want to run for each question
  });
  // we'll want to store the list of answer choices
const answers = [];

// and for each available answer...
for(letter in currentQuestion.answers){

  // ...add an html radio button
  answers.push(
    `<label>
      <input type="radio" name="question${questionNumber}" value="${letter}">
      ${letter} :
      ${currentQuestion.answers[letter]}
    </label>`
  );
}

// add this question and its answers to the output
output.push(
  `<div class="question"> ${currentQuestion.question} </div>
  <div class="answers"> ${answers.join('')} </div>`
);

function showResults(){

    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll('.answers');
  
    // keep track of user's answers
    let numCorrect = 0;
  
    // for each question...
    myQuestions.forEach( (currentQuestion, questionNumber) => {
  
      // find selected answer
      const answerContainer = answerContainers[questionNumber];
      const selector = 'input[name=question'+questionNumber+']:checked';
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;
  
      // if answer is correct
      if(userAnswer===currentQuestion.correctAnswer){
        // add to the number of correct answers
        numCorrect++;
  
        // color the answers green
        answerContainers[questionNumber].style.color = 'lightgreen';
      }
      // if answer is wrong or blank
      else{
        // color the answers red
        answerContainers[questionNumber].style.color = 'red';
      }
    });
  
    // show number of correct answers out of total
    resultsContainer.innerHTML = numCorrect + ' out of ' + myQuestions.length;
  }
  // gather answer containers from our quiz
const answerContainers = quizContainer.querySelectorAll('.answers');

// keep track of user's answers
let numCorrect = 0;

// for each question...
myQuestions.forEach( (currentQuestion, questionNumber) => {

    // find selected answer
    const answerContainer = answerContainers[questionNumber];
    const selector = `input[name=question${questionNumber}]:checked`;
    const userAnswer = (answerContainer.querySelector(selector) || {}).value;
  
    // if answer is correct
    if(userAnswer===currentQuestion.correctAnswer){
      // add to the number of correct answers
      numCorrect++;
  
      // color the answers green
      answerContainers[questionNumber].style.color = 'lightgreen';
    }
    // if answer is wrong or blank
    else{
      // color the answers red
      answerContainers[questionNumber].style.color = 'red';
    }
  });
  // find selected answer
const answerContainer = answerContainers[questionNumber];
const selector = `input[name=question${questionNumber}]:checked`;
const userAnswer = (answerContainer.querySelector(selector) || {}).value

// if answer is correct
if(userAnswer===currentQuestion.correctAnswer){
    // add to the number of correct answers
    numCorrect++;
  
    // color the answers green
    answerContainers[questionNumber].style.color = 'lightgreen';
  }
  // if answer is wrong or blank
  else{
    // color the answers red
    answerContainers[questionNumber].style.color = 'red';
  }

  // show number of correct answers out of total
resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;