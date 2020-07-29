const myQuestions = [
  {
      question: "How many Earths could fit inside the sun?",
      answers: [
          "3,100",
          "31 Million",
          "1.3 Million",
          "3.1 Million", ],
          correctAnswer: "1.3 Million"
  },
  {
      question: "Which country consumes the most chocolate per capita?",
      answers: [
          "Switzerland",
          "Belgium",
          "United Kingdom",
          "Germany", ],
      correctAnswer: "Switzerland"
  },
  {
      question: "Who was the only non Jedi in the original Star Wars trilogy to use a lightsaber?",
      answers: [
          "Obi-Wan Kenobi",
          "Princess Leia",
          "Chewbacca",
          "Hans Solo",],
          correctAnswer: "Hans Solo"
     
  },
  {
    question: "The Rock and Roll Hall of Fame is situated in what state in the U.S.?",
    answers: [
        "Ohio",
        "Tennesse",
        "Pennsylvania",
        "Indiana",],
        correctAnswer: "Ohio"
   
}
];


count = 90
let myInterval
let score = 0
let currentIndex = 0

const startButton = document.getElementById('start')
const nextButton = document.getElementById('next')
const correct = document.getElementById('right')
const wrong = document.getElementById('wrong')
const button = document.querySelector('button')


function nextQ () {
  document.getElementById('number1').textContent = myQuestions[currentIndex].question
  let answers = myQuestions[currentIndex].answers 
  
  document.getElementById('count').textContent = `${count} Seconds` 
  document.getElementById('score1').textContent = `${score}` 
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


const gameOver =() => {
  console.log('over')
  nextButton.classList.add('hide')
  document.getElementById('number1').classList.add('hide')
  clearInterval(myInterval)
  document.getElementById('allAnswers').innerHTML = `
  <h1 class="gameDone">The game has ended!</h1>
  <p class="finalScore">Your score: ${score}</p>
  <hr class="my-4">
  <form>
    <div class=" form form-group">
      <label for="username">Please choose a username for yourself</label>
      <input type="text" class="form-control" id="username">
      <button id="userInfo" class="btn">Submit</button>
    </div>
  </form>
`
}


document.getElementById('start').addEventListener('click', event => {
  event.preventDefault()
  startButton.classList.add('hide')
  nextQ() 

  myInterval = setInterval(() => {
    count--
    document.getElementById('count').textContent = `
    ${count} seconds left
    `
    if (count <= 0) {
      clearInterval(myInterval)
      gameOver()
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

function quizLength () {
  if (currentIndex < myQuestions.length) {
      nextQ()
    } else {
      gameOver()
    }

}


function getAnswers() {
  if (myQuestions[currentIndex].correctAnswer === event.target.dataset.answer) {
      console.log('Answer is Correct')
      let resultsElem = document.createElement('div')
      resultsElem.className = 'alert'
      // correct.classList.remove('hide') 
      // resultsElem.textContent = 'Correct!'
      // nextButton.classList.remove('hide') 
      // document.getElementById('result').innerHTML('Correct')
      // document.getElementById('allAnswers').append(resultsElem)
      score ++ } 
       else {
  console.log('Answer is Incorrect')
  let resultsElem = document.createElement('div')
      resultsElem.className = 'alert'
      // resultsElem.textContent = 'Wrong!' 
      // document.getElementById('allAnswers').append(resultsElem)
      count = count - 10
      nextButton.classList.remove('hide')
      // wrong.classList.remove('hide')
      // document.getElementById('result').innerHTML('Wrong!')
        
}
currentIndex ++ 
quizLength()
console.log(currentIndex)
}


const getScore = input => {
  console.log(input)
  let scoreboard = JSON.parse(localStorage.getItem('scoreboard')) || []
  scoreboard.push(input)
  localStorage.setItem('scoreboard', JSON.stringify(scoreboard))

 scoreboard.sort((x, y) => {
    return y.score - x.score
  })

  let tableElem = document.createElement('table')
  tableElem.className = 'table'
  tableElem.innerHTML = `
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">username</th>
        <th scope="col">score</th>
      </tr>
    </thead>
  `

  let bodyElem = document.createElement('tbody')

  for (let i = 0; i < scoreboard.length; i++) {
    let rowElem = document.createElement('tr')
    rowElem.innerHTML = `
      <th scope="row">${i + 1}</th>
      <td>${scoreboard[i].username}</td>
      <td>${scoreboard[i].score}</td>
    `
    bodyElem.append(rowElem)
  }

  tableElem.append(bodyElem)

  document.getElementById('allAnswers').append(tableElem)

}



document.addEventListener('click', event => { 
  if (event.target.classList.contains('answer')) {
    getAnswers()
  } else if (event.target.id === 'userInfo') {
    event.preventDefault()
    getScore({
      username: document.getElementById('username').value,
      score: score
    })
  }})
