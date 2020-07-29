
// my questions in an array 

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

// starting the timer at 90 seconds
count = 90
let myInterval
// starting score 
let score = 0
// tells the application which question it is on 
let currentIndex = 0

// creating constants based on Id's 

const startButton = document.getElementById('start')
const nextButton = document.getElementById('next')
const correct = document.getElementById('right')
const wrong = document.getElementById('wrong')
const button = document.querySelector('button')


// function to cycle to the next question 
function nextQ () {

  // adds the new question into div 
  document.getElementById('number1').textContent = myQuestions[currentIndex].question
  let answers = myQuestions[currentIndex].answers 

  // changes the updated score and seconds 
  
  document.getElementById('count').textContent = `${count} Seconds` 
  document.getElementById('score1').textContent = `${score}` 
  document.getElementById('allAnswers').innerHTML = ''
 
  // takes away start button with hide class 
  startButton.classList.add('hide')

  // adds the answers from questions above onto screen 

  for (let i=0; i < answers.length; i++) {
    let answerElem = document.createElement('button')
    answerElem.className = 'btn answer'
    answerElem.dataset.answer = answers[i]
    answerElem.textContent = answers[i] 
    document.getElementById('allAnswers').append(answerElem)
  }
  
}

// function for once the iteration has gone through all the questions 
const gameOver =() => {
  // updates score 
  document.getElementById('score1').textContent = `${score}` 
// hides the questions 
  document.getElementById('number1').classList.add('hide')
  // stops timer 
  clearInterval(myInterval)
  // replaces the answers div with the user form
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
  // calls function to start the loop for each question 
  nextQ() 

  // timer interval
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

// checks to see if it is the last question 
function quizLength () {
  if (currentIndex < myQuestions.length) {
      nextQ()
    } else {
      gameOver()
    }

}


function getAnswers() {
  // checks to match button pushed to correctAnswer 
  if (myQuestions[currentIndex].correctAnswer === event.target.dataset.answer) {
      // increases score 
      score ++ 
      } 
       else {
  // deducts points if wrong answer 
      count = count - 10
       
}
// increases index 
currentIndex ++ 
quizLength()
}

// creating scoreboard 
const getScore = input => {
  console.log(input)
  let scoreboard = JSON.parse(localStorage.getItem('scoreboard')) || []
  scoreboard.push(input)
  localStorage.setItem('scoreboard', JSON.stringify(scoreboard))

// creating a reverse ranking system so highest is on top 
 scoreboard.sort((x, y) => {
    return y.score - x.score
  })

// table to show entire scoreboard and rankings 
  let tableElem = document.createElement('table')
  tableElem.className = 'table'
  // inserting table into html 
  // heading and structure for table
  tableElem.innerHTML = `
    <thead>
      <tr>
        <th scope="col">Ranking</th>
        <th scope="col">Username</th>
        <th scope="col">Your Score</th>
      </tr>
    </thead>
  `
// assigning tbody to a body element
  let bodyElem = document.createElement('tbody')

  for (let i = 0; i < scoreboard.length; i++) {
    let rowElem = document.createElement('tr')

    // adding user info into a new row 
    rowElem.innerHTML = `
      <th scope="row">${i + 1}</th>
      <td>${scoreboard[i].username}</td>
      <td>${scoreboard[i].score}</td>
    `
    // adds new row to body element
    bodyElem.append(rowElem)
  }

  tableElem.append(bodyElem)
  // appends table to div 
  document.getElementById('allAnswers').append(tableElem)

}


// event listener for buttons
document.addEventListener('click', event => { 
  // if clicked on an answer 
  if (event.target.classList.contains('answer')) {
    getAnswers()
  } 
  // if they clicked on the submit info button 
  else if (event.target.id === 'userInfo') {
    event.preventDefault()
    // saves user info by value
    getScore({
      username: document.getElementById('username').value,
      score: score
    })
  }})
