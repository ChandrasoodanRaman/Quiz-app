let questions=[
    {
        question:"which is largest animal in the world?",
        answers:[
            {text:"shark",correct:false},
            {text:"blue whale",correct:true},
            {text:"elephant",correct:false},
            {text:"giraffe",correct:false}
        ]
    },
    {
        question:"which is largest country in the world?",
        answers:[
            {text:"india",correct:false},
            {text:"russia",correct:true},
            {text:"canada",correct:false},
            {text:"china",correct:false}
        ] 
    },
    {
        question:"which is largest state  in the india by area?",
        answers:[
            {text:"tamilnadu",correct:false},
            {text:"rajasthan",correct:true},
            {text:"uttar pradesh",correct:false},
            {text:"maharashtra",correct:false}
        ]
    },
    {
        question:"which is largest flower in the world?",
        answers:[
            {text:"rose",correct:false},
            {text:"rafflesia",correct:true},
            {text:"lotus",correct:false},
            {text:"lily",correct:false}
        ]
    }
    
]
let questionEle=document.getElementById("question")
let answerEle=document.getElementById("answer-button")
let nextEle=document.getElementById("next-btn")

let currentQuestionIndex=0;
let score=0

function startQuiz()
{
    currentQuestionIndex=0
    score=0
    nextEle.innerHTML="next"
    showQuestion()
}
function showQuestion()
{
    resetState()
    let currentQuestion=questions[currentQuestionIndex]
    let questionNo=currentQuestionIndex+1
     questionEle.innerHTML=questionNo+"."+currentQuestion.question

     currentQuestion.answers.forEach(answer => {
        const newButton=document.createElement("button")
         newButton.innerHTML=answer.text
        newButton.classList.add("btn")
        answerEle.appendChild(newButton)

        if(answer.correct)
        {
            newButton.dataset.correct=answer.correct
        }
        newButton.addEventListener("click",selectAnswer)
     });

}

function resetState()
{
    nextEle.style.display="none"
    while(answerEle.firstChild)
    {
        answerEle.removeChild(answerEle.firstChild)
    }
}
function selectAnswer(e)
{
    const selectedBtn=e.target
    const isCorrect=selectedBtn.dataset.correct
    if(isCorrect)
    {
        selectedBtn.classList.add("correct")
        score++;
    }
    else{
        selectedBtn.classList.add("incorrect")
    }
    Array.from(answerEle.children).forEach((button)=>
    {
        if(button.dataset.correct==="true")
        {
            button.classList.add("correct")
        }
        button.disabled=true
    })
    nextEle.style.display="block"

}
function showScore()
{
    resetState()
    questionEle.innerHTML=`you scored ${score} out of ${questions.length}`
    nextEle.innerHTML="play again"
    nextEle.style.display="block"
}
function handleNextButton()
{
  currentQuestionIndex++
  if(currentQuestionIndex<questions.length)
  {
    showQuestion()
  }
  else
  {
    showScore()
  }
}
nextEle.addEventListener("click",()=>{
    if(currentQuestionIndex<questions.length)
    {
        handleNextButton()
    }
    else{
        startQuiz()
    }
})
startQuiz()