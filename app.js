const STORE = {
    questions: [
      {
        question: 'Who is considered the "Father of Neuroscience"?',
        answers: [
          'Santiago Ramon y Cajal',
          'Marie Curie',
          'Camillo Golgi',
          'Plato'
        ],
        correctAnswer: 'Santiago Ramon y Cajal'
      },
      {
        question: 'What are the connections unique to neurons that allow neurons to communicate?',
        answers: [
          'Clefts',
          'Joints',
          'Synapses',
          'Conductors'
        ],
        correctAnswer: 'Synapses'
      },
      {
        question: 'Where are neurons found in the body?',
        answers: [
          'Brain only',
          'Brain and muscles',
          'Brain, muscles, and spinal cord',
          'Neurons are everywhere!'
        ],
        correctAnswer: 'Neurons are everywhere!'
      },
      {
        question: 'Which of the following animals doesn`t have a brain?' ,
        answers: [
          'Lobster',
          'Jellyfish',
          'Snail',
          'Ant'
        ],
        correctAnswer: 'Jellyfish'
      },
      {
        question: 'Which neurotransmitter is commonly refered to as the "love hormone"?',
        answers: [
          'Acetylcholine',
          'Norepinephrine',
          'Dopamine',
          'Oxytocin'
        ],
        correctAnswer: 'Oxytocin'
      }
    ],
    questionNumber: 0,
    score: 0
  };

  function handleQuizStartPage() {
    $('main').html(`
    <div class="welcome">
    <h3>Welcome!</h3>
    <p>Want to test your neuroscience knowledge?</p>
    </div>
    <button class="start-quiz">Start Quiz</button>
    `);
  
}

function handleQuizStart() {
   $('main').on('click', '.start-quiz', event => {
     renderQuiz();
   });
}

function generateQuizQuestionForm(quiz) {
  const currentQuestionNumber = quiz.questionNumber;
  const currentQuizQuestion = quiz.questions[currentQuestionNumber];
  
  return `
   <form class="wireframe">
        <fieldset>
            <legend>Question ${currentQuestionNumber + 1}: ${currentQuizQuestion.question}</legend>

            <input type="radio" id="a" name="answer-choice" required><label for="a">${currentQuizQuestion.answers[0]}</label><br>
            <input type="radio" id="b" name="answer-choice"><label for="b">${currentQuizQuestion.answers[1]}</label><br>
            <input type="radio" id="c" name="answer-choice"><label for="c">${currentQuizQuestion.answers[2]}</label><br>
            <input type="radio" id="d" name="answer-choice"><label for="d">${currentQuizQuestion.answers[3]}</label><br>
        </fieldset>
        <div>
        <button type="submit">Submit</button>
        </div>
    </form> 
    <div class="progress">
    <p>Score: ${quiz.score} / 5</p>
    <p>Progress: Question ${currentQuestionNumber + 1} / 5</p>
    </div>
    `;
}

function renderQuiz() {
    /*render in <main>, insert form with 
    -question
    -answers as radio buttons
    -object index in array */
    const quizQuestionDisplay = generateQuizQuestionForm(STORE);
  //update quizStarted value
  //update questionNumber
  $('main').html(quizQuestionDisplay)
}

function checkAnswer(submittedAnswer, quiz) {
  const currentCorrectAnswer = quiz.questions[quiz.questionNumber].correctAnswer;
  //compare submitted answer against correct
  if (submittedAnswer === currentCorrectAnswer) {
    quiz.score++;
    $('input[name="answer-choice"]:checked').next('label').after(`<p class="correct">Correct!</p>`);
   } else {
    $('input[name="answer-choice"]:checked').next('label').after(`<p class="incorrect">Sorry, incorrect. The answer is ` + currentCorrectAnswer + `</p>`);
   }
}


function handleQuestionSubmission() {
  //for when user hits submit on a question, checks answer and displays proper response
  //updates button with NEXT, updates score
  $('main').submit(function(event) {
    event.preventDefault();
    //get answer choice value
    const submittedAnswer = $('input[name="answer-choice"]:checked').next('label').html();
    $('button').html('Next').attr('type', 'button').attr('class', 'next');
    //clear radio buttons of check
    $('input[name="answer-choice"]').attr('disabled', true)
    //check answer and alert
    checkAnswer(submittedAnswer, STORE);
  })
}

function handleNextQuestion() {
  $('main').on('click', '.next', event => {
    STORE.questionNumber++;
    if (STORE.questionNumber >= STORE.questions.length) {
      handleQuizSubmission();
    } else {
    renderQuiz(); }
  })
}



function handleQuizSubmission() {
  $('main').html(` 
  <div class="finished">
  <h3>Quiz complete!</h3>
  <p>You got ${STORE.score} questions correct!</p>
  </div>
  <button class="restart-quiz">Try Again</button>
  `);
}

function handleRestartQuiz() {
  $('main').on('click', '.restart-quiz', event => {
    STORE.score = 0;
    STORE.questionNumber = 0;
    renderQuiz();
  })
}



function handleSubmissionResponse() {
  //for when user response is not correct, displays an error code with correct response
}

function handleQuizCompletion() {
  //for when user finishes quiz, display screen with final score and ability to restart quiz
}


function handleQuizApp() {
  handleQuizStartPage();
  handleQuizStart();
  handleQuestionSubmission();
  handleNextQuestion();
  handleRestartQuiz();
}

$(handleQuizApp);