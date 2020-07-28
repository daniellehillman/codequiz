const myQuestions = [
  {
      question: "Pretend this is a really hard question",
      answers: [
          "Yes",
          "No",
          "Maybe",
          "Yo", ],
          correctAnswer: "No"
  },
  {
      question: "Pretend this is a really easy question",
      answers: [
          "Yes",
          "No",
          "Maybe",
          "Yo", ],
      correctAnswer: "Maybe"
  },
  {
      question: "Pretend you enjoy taking this quiz!",
      answers: [
          "Yes",
          "No",
          "Maybe",
          "I dont know",],
          correctAnswer: "Yes"
     
  },
  {
    question: "Last Question",
    answers: [
        "Yes",
        "No",
        "Maybe",
        "I dont know",],
        correctAnswer: "I dont Know"
   
}
];


count = 90
let myInterval
let question = 0
let score = 0
let currentIndex = 0

const startButton = document.getElementById('start')
const nextButton = document.getElementById('next')
const correct = document.getElementById('right')
const wrong = document.getElementById('wrong')


function nextQ () {

  document.getElementById('number1').textContent = myQuestions[currentIndex].question
  let answers = myQuestions[currentIndex].answers 
  
  document.getElementById('count').textContent = `${count} Seconds` 

  document.getElementById('allAnswers').innerHTML = ''

  startButton.classList.add('hide')

  for (let i=0; i < answers.length; i++) {
    let answerElem = document.createElement('button')
    answerElem.className = 'btn answer'
    answerElem.dataset.answer = answers[i]
    answerElem.textContent = answers[i] 
    document.getElementById('allAnswers').append(answerElem)
    nextButton.classList.add('hide') 
  }
  
}



document.getElementById('start').addEventListener('click', event => {
  event.preventDefault()
  startButton.classList.add('hide')
  nextQ() 

  myInterval = setInterval(() => {
    count--
    document.getElementById('count').textContent = `
    ${count} Seconds
    `
    if (count <= 0) {
      clearInterval(myInterval)
    }
  }, 1000)
}
)

document.getElementById('next').addEventListener('click', event => {
  event.preventDefault()
  startButton.classList.add('hide')
  nextQ()
}
)


document.addEventListener('click', event => { 
if (event.target.classList.contains('answer')) {
  if (myQuestions[currentIndex].correctAnswer === event.target.dataset.answer) {
      console.log('Answer is Correct')
      let resultsElem = document.createElement('div')
      resultsElem.className = 'alert'
      resultsElem.textContent = 'Correct!'
      document.getElementById('allAnswers').append(resultsElem)
      score ++
  
} else {
  console.log('Answer is Incorrect')
  let resultsElem = document.createElement('div')
      resultsElem.className = 'alert'
      resultsElem.textContent = 'Wrong!'
      document.getElementById('allAnswers').append(resultsElem)
}
currentIndex ++
console.log(currentIndex)
nextButton.classList.remove('hide')




// setTimeout(()=> {

  // if (currentIndex < myQuestions.length) {
  //   document.getElementById('allAnswers').append('')
  //   resultsElem.textContent = '' 
  //   nextQ()
  // } else {
  

  //   alert('game is over')
  // }
// }
// , 1000)
// }
}})
 
// quinton's code 
const getScore = submission => {

console.log(submission)

let leaderboard = JSON.parse(localStorage.getItem('leaderboard')) || []
leaderboard.push(submission)

localStorage.setItem('leaderboard', JSON.stringify(leaderboard))

leaderboard.sort((a,b) => {
return b.score - a.score

})


}