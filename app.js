/**
 * Example store structure
 */
const STORE = {
    // 5 or more questions are required
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
    quizStarted: false,
    questionNumber: 0,
    score: 0
  };

  
  /**
   * 
   * Technical requirements:
   * 
   * Your app should include a render() function, that regenerates the view each time the store is updated. 
   * See your course material and access support for more details.
   *
   * NO additional HTML elements should be added to the index.html file.
   *
   * You may add attributes (classes, ids, etc) to the existing HTML elements, or link stylesheets or additional scripts if necessary
   *
   * SEE BELOW FOR THE CATEGORIES OF THE TYPES OF FUNCTIONS YOU WILL BE CREATING 👇
   * 
   */
  
  /********** TEMPLATE GENERATION FUNCTIONS **********/
  
  // These functions return HTML templates
  
  /********** RENDER FUNCTION(S) **********/
  
  // This function conditionally replaces the contents of the <main> tag based on the state of the store
  
  /********** EVENT HANDLER FUNCTIONS **********/
  
  // These functions handle events (submit, click, etc)

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
     console.log('start quiz clicked')
     renderQuiz();
   });
 }

  function generateQuizQuestionForm(currentQuizQuestion, currentQuestionNumber) {
  return `
  <form class="wireframe">
        <fieldset>
            <legend>Question ${currentQuestionNumber + 1}: ${currentQuizQuestion.question}</legend>

            <input type="radio" id="a" name="answer-choice" required><label for="a">${currentQuizQuestion.answers[0]}x</label><br>
            <input type="radio" id="b" name="answer-choice"><label for="b">${currentQuizQuestion.answers[1]}</label><br>
            <input type="radio" id="c" name="answer-choice"><label for="c">${currentQuizQuestion.answers[2]}</label><br>
            <input type="radio" id="d" name="answer-choice"><label for="d">${currentQuizQuestion.answers[3]}</label><br>
        </fieldset>
        <div>
        <button type="submit">Submit</button>
        </div>
    </form>  `;
}


function generateQuizQuestionFormInput(quiz) {
  //choose appropriate question for input to genForm function
  const currentQuestionNumber = quiz.questionNumber;
  console.log(currentQuestionNumber);
  const currentQuizQuestion = quiz.questions[currentQuestionNumber];
  console.log(currentQuizQuestion);
  const currentQuestionForm = generateQuizQuestionForm(currentQuizQuestion, currentQuestionNumber);
  return currentQuestionForm;
}

function renderQuiz() {
    //responsible for rendering quiz in the DOM
    console.log('`renderQuiz` ran');
    /*render in <main>, insert form with 
    -question
    -answers as radio buttons
    -object index in array */
    const quizQuestionDisplay = generateQuizQuestionFormInput(STORE);
  //update quizStarted value
  //update questionNumber
  $('main').html(quizQuestionDisplay)
}

function updateScore(quiz) {
  quiz.score++
  console.log(quiz.score)
}

function checkIsAnswerCorrect(submittedAnswer, quiz) {
  const currentCorrectAnswer = quiz.questions[quiz.questionNumber].correctAnswer
  console.log(currentCorrectAnswer);
  //compare submitted answer against correct
  if (submittedAnswer === currentCorrectAnswer) {
    updateScore(quiz);
    return `<p class="correct">Correct!</p>`;
   } else {
     return `<p class="incorrect">Sorry, incorrect. The answer is ` + currentCorrectAnswer + `</p>`;
   }
}

function handleQuestionSubmission() {
  //for when user hits submit on a question, checks answer and displays proper response
  //updates button with NEXT, updates score
  $('main').submit(function(event) {
    event.preventDefault();
    //get answer choice value
    const submittedAnswer = $('input[name="answer-choice"]:checked').next('label').html();
    //check answer and alert
    const correctOrIncorrectAlert = checkIsAnswerCorrect(submittedAnswer, STORE);
    $('input[name="answer-choice"]:checked').next('label').after(correctOrIncorrectAlert);
    //change button to next
    $('button').html('Next').attr('type', 'button').attr('class', 'next')
    //clear radio buttons of check
    $('input[name="answer-choice"]').attr('disabled', true)
    console.log('handleQuestionSubmission ran')
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

function getQuizScore() {
  return STORE.score;
}

function handleQuizSubmission() {
  const finalScore = getQuizScore(STORE);
  $('main').html(`
  <div class="fnished">
  <h3>Quiz complete!</h3>
  <p>You got ${finalScore} questions correct!</p>
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
  handleRestartQuiz;
}

$(handleQuizApp);