

function nextQuestion(number) {
    event.preventDefault()

    startButton.classList.add('hide')
    correct.classList.add('hide')
    wrong.classList.add('hide')
    console.log('hi')
    document.getElementById('number1').innerHTML = `
    ${myQuestions[number].question}`
    a.innerHTML = `${myQuestions[number].a} `
    b.innerHTML = `${myQuestions[number].b} `
    c.innerHTML = `${myQuestions[number].c} `
    d.innerHTML = `${myQuestions[number].d} `
  
    nextButton.classList.add('hide')
    correct.classList.add('hide')
    wrong.classList.add('hide')
    }
  
  
  
  
  
  document.getElementById('start').addEventListener('click', event => {
    event.preventDefault()
    startButton.classList.add('hide')
    let question = 0
    
  
    myInterval = setInterval(() => {
      // console.log(count)
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
  
  
    document.getElementById('count').textContent = `
      ${count} Seconds
      `
  
  
  
    document.getElementById('number1').innerHTML = `
    ${myQuestions[0].question}`
    document.getElementById('A').innerHTML = `
    ${myQuestions[0].a} `
    a.innerHTML = `${myQuestions[number].a} `
    b.innerHTML = `${myQuestions[number].b} `
    c.innerHTML = `${myQuestions[number].c} `
    d.innerHTML = `${myQuestions[number].d} `
    nextButton.classList.remove('hide')  
  }
  
  
  
  )
  
  
  document.addEventListener('click', event => {
  
    if() ) {
      document.getElementById('score1').innerHTML = `1`
      nextButton.classList.remove('hide')
      correct.classList.remove('hide')
      let q = myquestions[question]
  } else if (event.target.classList.contains('1')) {
    wrong.classList.remove('hide')
    count = count - 10
    
  } else if (event.target.classList.contains('3')) {
    wrong.classList.remove('hide')
    count = count - 10
  
    }
    else if (event.target.classList.contains('4')) {
      wrong.classList.remove('hide')
      count = count - 10
       }
  
      })
  

      
      
      document.addEventListener('click', event => {
        if (event.target.classList.contains('test') && myQuestions[0].correctAnswer === 'b') {
          document.getElementById('score1').innerHTML = `1`
          nextButton.classList.remove('hide')
          correct.classList.remove('hide')
          nextQuestion(1)
        } else if (event.target.classList.contains('1')) {
        wrong.classList.remove('hide')
        count = count - 10
        
        } else if (event.target.classList.contains('3')) {
        wrong.classList.remove('hide')
        count = count - 10
        
        }
        else if (event.target.classList.contains('4')) {
          wrong.classList.remove('hide')
          count = count - 10
           }
        
        }) 
  
  
  




function nextQ () {

    document.getElementById('number1').textContent = myQuestions[currentIndex].question
    let allanswers = myQuestions[currentIndex].answers
    document.getElementbyId('allanswers').textContent = myQuestions[currentIndex].answers
  
    document.getElementById('results').innerHTML = ''
    document.getElementById('count').textContent = `${count} Seconds` 
    // document.getElementById('number1').textContent = `
    // ${myQuestions[z].question}`
    startButton.classList.add('hide')
    let answers = myQuestions[currentIndex].answers
  
  
  
    for (let i=0; i < answers.length; i++) {
      let answerElem = document.createElement('button')
      answerElem.className = 'btn answer'
      answerELem.dataset.answer = answers[i]
      answerElem.textContent = answers[i]
      document.getElementbyID('answer').append(answerELem)
  
    }
  }
  
  
  
  // if (event.target.classList.contains('correct') && myQuestions[0].correctAnswer === 'b') {
  //   document.getElementById('score1').innerHTML = `1`
  //   nextButton.classList.remove('hide')
  //   correct.classList.remove('hide')
  //   nextQuestion(1)
  // } else if (event.target.classList.contains('1')) {
  // wrong.classList.remove('hide')
  // count = count - 10
  
  // } else if (event.target.classList.contains('3')) {
  // wrong.classList.remove('hide')
  // count = count - 10
  
  // }
  // else if (event.target.classList.contains('4')) {
  //   wrong.classList.remove('hide')
  //   count = count - 10
  //    }
  
  // }) 
  
  // document.addEventListener('click', event => {
  
  //   if ( question === 1 && event.target.classList.contains('3') && myQuestions[1].correctAnswer === 'c') {
  //       document.getElementById('score1').innerHTML = `1`
  //       nextButton.classList.remove('hide')
  //       correct.classList.remove('hide')
  //       nextQuestion(2)
  //   } else if (event.target.classList.contains('1')) {
  //     wrong.classList.remove('hide')
  //     count = count - 10
     
  //   } else if (event.target.classList.contains('2')) {
  //     wrong.classList.remove('hide')
  //     count = count - 10
  //     }
  //     else if (event.target.classList.contains('4')) {
  //       wrong.classList.remove('hide')
  //       count = count - 10
  //        }
    
  //   }) 
  
  //   document.addEventListener('click', event => {
  
  //     if ( question === 2 && event.target.classList.contains('4') && myQuestions[2].correctAnswer === 'd') {
  //         document.getElementById('score1').innerHTML = `1`
  //         nextButton.classList.remove('hide')
  //         correct.classList.remove('hide')
  //         nextQuestion(3)
  //     } else if (event.target.classList.contains('1')) {
  //       wrong.classList.remove('hide')
  //       count = count - 10
       
  //     } else if (event.target.classList.contains('2')) {
  //       wrong.classList.remove('hide')
  //       count = count - 10
  //       }
  //       else if (event.target.classList.contains('3')) {
  //         wrong.classList.remove('hide')
  //         count = count - 10
  //          }
      
  //     }) 
  //     document.addEventListener('click', event => {
  
  //       if ( question === 3 && event.target.classList.contains('4') && myQuestions[3].correctAnswer === 'd') {
  //           document.getElementById('score1').innerHTML = `1`
  //           nextButton.classList.remove('hide')
  //           correct.classList.remove('hide')
  //           nextQuestion(4)
  //       } else if (event.target.classList.contains('1')) {
  //         wrong.classList.remove('hide')
  //         count = count - 10
  
         
  //       } else if (event.target.classList.contains('2')) {
  //         wrong.classList.remove('hide')
  //         count = count - 10
  //         }
  //         else if (event.target.classList.contains('3')) {
  //           wrong.classList.remove('hide')
  //           count = count - 10
  //            }
        
  //       }) 
    
  
  
  
  
  
  
  // } else { 
  //   wrong.classList.remove('hide')
    // } else if (vent.target.classList.contains('test') && myQuestions[0].correctAnswer === 'a'  || 'c' || 'd') {
    //   wrong.classList.remove('hide')
    //   // insert timer thing 
    
  //   if (event.target.classList.contains('test') && myQuestions[0].correctAnswer != 'b') {
  //     console.log('works')
  //     document.getElementById('score1').innerHTML = `1`
  //     nextButton.classList.remove('hide')
  //     wrong.classList.remove('hide')
  // } 
  
  

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
  
  // if (event.target.classList.contains('test')) {
  //   if (myQuestions[0].correctAnswer === 'b') {
  //     console.log('works')
  //     document.getElementById('score1').innerHTML = `1`
  //     nextButton.classList.remove('hide')
  //     correct.classList.remove('hide')
  //   } else if (myQuestions[0].correctAnswer === 'a'  || 'c' || 'd') {
  //     wrong.classList.remove('hide')
  //   //   // insert timer thing 
  //   }
  // } 
  // })
  
  
  
  
  
  // document.getElementById('next').addEventListener('click', event => {
  //   event.preventDefault()
  //   for (i = 1; i < 4; i++ ){ 
  //   startButton.classList.add('hide')
  //   correct.classList.add('hide')
  //   wrong.classList.add('hide')
  //   console.log('hi')
  //   // for (i = 1; i < 4; i++ ){ 
  //   document.getElementById('number1').innerHTML = `
  //   ${myQuestions[i].question}`
  //   document.getElementById('A').innerHTML = `
  //   ${myQuestions[i].a} `
  //   document.getElementById('B').innerHTML = `
  //   ${myQuestions[i].b} `
  //   document.getElementById('C').innerHTML = `
  //   ${myQuestions[i].c} `
  //   document.getElementById('D').innerHTML = `
  //   ${myQuestions[i].d} `
  //   nextButton.classList.add('hide')
  
  
  //   }
  // })
  
  
  
const startButton = document.getElementById('start')
const nextButton = document.getElementById('next')
const correct = document.getElementById('right')
const wrong = document.getElementById('wrong')


const a = document.getElementById('A')
const b = document.getElementById('B')
const c = document.getElementById('C')
const d = document.getElementById('D')


function startGame (z) {
  document.getElementById('results').innerHTML = ''
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

// for (i = 1; i< 3;i++) { 
//   document.getElementById('next').addEventListener('click', event => {
//     document.getElementById('next').classList.add('next2')
//  startGame(2)
// }
  
// )



document.addEventListener('click', event => {
  if (event.target.classList.contains('test') && myQuestions[0].correctAnswer === 'b') {
    document.getElementById('score1').innerHTML = `1`
    nextButton.classList.remove('hide')
    document.getElementById('results').innerHTML = 'right'
    // correct.classList.remove('hide') 
    startGame(1)
  } else {
    document.getElementById('results').innerHTML = 'wrong'
  // wrong.classList.remove('hide')
  count = count - 10 }
  
  })
  document.getElementById('next').addEventListener('click', event => {
    document.getElementById('next').classList.add('next2')
 startGame(2)
})
document.getElementById('next2').addEventListener('click', event => {
  document.getElementById('next').classList.add('next2')
startGame(0)
}
)







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



// for (i = 1; i< 3;i++) { 
//   document.getElementById('next').addEventListener('click', event => {
//     document.getElementById('next').classList.add('next2')
//  startGame(2)
// }
  
// )



// document.addEventListener('click', event => {
//   if (event.target.classList.contains('test') && myQuestions[0].correctAnswer === 'b') {
//     document.getElementById('score1').innerHTML = `1`
//     nextButton.classList.remove('hide')
//     document.getElementById('results').innerHTML = 'right'
//     // correct.classList.remove('hide') 
//     startGame(1)
//   } else {
//     document.getElementById('results').innerHTML = 'wrong'
//   // wrong.classList.remove('hide')
//   count = count - 10 }
  
//   })
//   document.getElementById('next').addEventListener('click', event => {
//     document.getElementById('next').classList.add('next2')
//  startGame(2)
// })
// document.getElementById('next2').addEventListener('click', event => {
//   document.getElementById('next').classList.add('next2')
// startGame(0)
// }
// )







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

  
  

// document.addEventListener('click', event => {
//   if (event.target.classList.contains('answer')) {
//     (event.target.dataset.answer)
//   } else if (event.target.id === 'submitScore') {
//     event.preventDefault()
//     submitScore({
//       username: document.getElementById('username').value,
//       score: score
//     })
//   }
// })


}}
)

// document.addEventListener('click', event => {

// if (event.target.id === 'userInfo') {
// event.preventDefault()
// console.log('hi')
// getScore()

// // userInfo() 

//   // { Name: document.getElementById('username').value,
//   // Score: score }

// }



// })
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  