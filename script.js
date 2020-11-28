/**
 * Example store structure
 */
const store = {
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
      }
      {
        question: 'Where are neurons found in the body?',
        answers: [
          'Brain only',
          'Brain and muscles',
          'Brain, muscles, and spinal cord',
          'Neurons are everywhere!'
        ],
        correctAnswer: 'Neurons are everywhere!'
      }
      {
        question: 'Which of the following animals doesn`t have a brain?' ,
        answers: [
          'Lobster',
          'Jellyfish',
          'Snail',
          'Ant'
        ],
        correctAnswer: 'Jellyfish'
      }
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

funciton renderQuiz() {
    //responsible for rendering quiz in the DOM
}