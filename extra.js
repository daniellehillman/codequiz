

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
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  