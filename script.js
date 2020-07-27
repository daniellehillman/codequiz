const myQuestions = [
  {
      question: "Pretend this is a really hard question",
          a: "Yes" = true,
          b: "No" = true,
          c: "Maybe" = false,
          d: "yo" = false,
          correctAnswer: "b"
  },
  {
      question: "Pretend this is a really easy question",
          a: "Yes",
          b: "No",
          c: "Maybe",
          d: "yo",
      correctAnswer: "c"
  },
  {
      question: "Pretend you enjoy taking this quiz!",
          a: "Yes",
          b: "No",
          c: "Maybe",
          d: "I dont know",
          correctAnswer: "d"
     
  },
  {
    question: "Last Question",
        a: "Yes",
        b: "No",
        c: "Maybe",
        d: "I dont know",
        correctAnswer: "d"
   
}
];

console.log(myQuestions[0])

count = 90
let myInterval
let question = 0
score = 0

const startButton = document.getElementById('start')
const nextButton = document.getElementById('next')
const correct = document.getElementById('right')
const wrong = document.getElementById('wrong')


const a = document.getElementById('A')
const b = document.getElementById('B')
const c = document.getElementById('C')
const d = document.getElementById('D')


function startGame (z) {
  document.getElementById('count').textContent = `
  ${count} Seconds` 
  document.getElementById('number1').innerHTML = `
  ${myQuestions[z].question}`
  document.getElementById('A').innerHTML = `
  ${myQuestions[z].a} `
  document.getElementById('A').classList.remove('hide')
  document.getElementById('B').innerHTML = `
  ${myQuestions[z].b} `
  document.getElementById('B').classList.remove('hide')
  document.getElementById('C').innerHTML = `
  ${myQuestions[z].c} `
  document.getElementById('C').classList.remove('hide')
  document.getElementById('D').innerHTML = `
  ${myQuestions[z].d} `
  document.getElementById('D').classList.remove('hide')
  nextButton.classList.remove('hide')
}




  
document.getElementById('start').addEventListener('click', event => {
  event.preventDefault()
  startButton.classList.add('hide')


  myInterval = setInterval(() => {
    
    // displays time left on screen
    count--
    document.getElementById('count').textContent = `
    ${count} Seconds
    `
    // moves count down by 1
    if (count <= 0) {

      console.log('works')
      clearInterval(myInterval)
      document.getElementById('count').innerHTML = ``
      document.getElementById('question1').innerHTML = `
      finished
      `
      // document.getElementById('number1').innerHTML = `
      // Great job! Your score is: ${score}
      // `
    }
  }, 1000)

  startGame(0)
}

)

for (i = 1; i< 3;i++) {
  document.getElementById('next').addEventListener('click', event => {
 startGame(i)
}
)}




  if (event.target.classList.contains('test') && myQuestions[0].correctAnswer === 'b') {
    document.getElementById('score1').innerHTML = `1`
    nextButton.classList.remove('hide')
    correct.classList.remove('hide')
    startGame(1)
  } else {
  wrong.classList.remove('hide')
  count = count - 10 }
  

  







// document.addEventListener('click', event => {
// if (event.target.classList.contains('test') && myQuestions[0].correctAnswer === 'b') {
//   document.getElementById('score1').innerHTML = `1`
//   nextButton.classList.remove('hide')
//   correct.classList.remove('hide')
//   nextQuestion(1)
// } else {
// wrong.classList.remove('hide')
// count = count - 10 }

// }) 





//  document.getElementById('next').addEventListener('click', event => { 
    
//     event.preventDefault()
//     // for (i = 1; i < 4; i++ ){ 
//     startButton.classList.add('hide')
//     correct.classList.add('hide')
//     wrong.classList.add('hide')
    
//     document.getElementById('number1').innerHTML = `
//     ${myQuestions[1].question}`
//     document.getElementById('A').innerHTML = `
//     ${myQuestions[1].a} `
//     document.getElementById('B').innerHTML = `
//     ${myQuestions[1].b} `
//     document.getElementById('C').innerHTML = `
//     ${myQuestions[1].c} `
//     document.getElementById('D').innerHTML = `
//     ${myQuestions[1].d} `
//     // nextButton.classList.add('hide')
//     nextButton.classList.add('next2')
// })


// function lastQuestion(){
//   document.getElementById('number1').innerHTML = `
//   ${myQuestions[2].question}`
//   document.getElementById('A').innerHTML = `
//   ${myQuestions[2].a} `
//   document.getElementById('B').innerHTML = `
//   ${myQuestions[2].b} `
//   document.getElementById('C').innerHTML = `
//   ${myQuestions[2].c} `
//   document.getElementById('D').innerHTML = `
//   ${myQuestions[2].d} `
  
// }



// lastQuestion ()

// function tester(){
//   document.getElementById('number1').innerHTML = `
//   ${myQuestions[3].question}`
//   document.getElementById('A').innerHTML = `
//   ${myQuestions[3].a} `
//   document.getElementById('B').innerHTML = `
//   ${myQuestions[3].b} `
//   document.getElementById('C').innerHTML = `
//   ${myQuestions[3].c} `
//   document.getElementById('D').innerHTML = `
//   ${myQuestions[3].d} `
  
// }

  // document.getElementById('next2').addEventListener('click', event => {
//     event.preventDefault()
//     // for (i = 1; i < 4; i++ ){ 
//     startButton.classList.add('hide')
//     correct.classList.add('hide')
//     wrong.classList.add('hide')
    
//     document.getElementById('number1').innerHTML = `
//     ${myQuestions[2].question}`
//     document.getElementById('A').innerHTML = `
//     ${myQuestions[2].a} `
//     document.getElementById('B').innerHTML = `
//     ${myQuestions[2].b} `
//     document.getElementById('C').innerHTML = `
//     ${myQuestions[2].c} `
//     document.getElementById('D').innerHTML = `
//     ${myQuestions[2].d} `
//     // nextButton.classList.add('hide')
//     nextButton.classList.add('next3')
//   }
//   )


//  document.getElementById('next3').addEventListener('click', event => {
//   event.preventDefault()
//   // for (i = 1; i < 4; i++ ){ 
//   startButton.classList.add('hide')
//   correct.classList.add('hide')
//   wrong.classList.add('hide')
  
//   document.getElementById('number1').innerHTML = `
//   ${myQuestions[3].question}`
//   document.getElementById('A').innerHTML = `
//   ${myQuestions[3].a} `
//   document.getElementById('B').innerHTML = `
//   ${myQuestions[3].b} `
//   document.getElementById('C').innerHTML = `
//   ${myQuestions[3].c} `
//   document.getElementById('D').innerHTML = `
//   ${myQuestions[3].d} `
//   // nextButton.classList.add('hide')
//   // nextButton.classList.replace('next2') 
// })


