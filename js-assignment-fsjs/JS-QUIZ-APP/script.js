const quizData = [
    {
        question: "Which built-in method calls a function for each element in the array?",
        a: "while()",
        b: "loop()",
        c: "forEach()",
        d: "None of the above",
        correct: "c",
    },
    {
        question: "Which built-in method reverses the order of the elements of an array?",
        a: "changeOrder(order)",
        b: "reverse()",
        c: "sort(order)",
        d: "None of the above",
        correct: "b",
    },
    {
        question: "Which of the following is a valid type of function javascript supports?",
        a: "named function",
        b: "anonymous function",
        c: "Both the above",
        d: "None of the above",
        correct: "c",
    },
    {
        question: "What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: "b",
    },
];
                                             
const questionEl=document.querySelector("#question");
const a_text=document.querySelector("#a_text");
const b_text=document.querySelector("#b_text");
const c_text=document.querySelector("#c_text");
const d_text=document.querySelector("#d_text");
const submitBtn = document.getElementById("submit");

let questionCount=0;
let score = 0
const showScore=document.getElementById("showScore");

loadQuiz()

function loadQuiz() {
    const questionList=quizData[questionCount];
    console.log(questionList);
    questionEl.innerText=questionList.question;
    a_text.innerText=questionList.a;
    b_text.innerText=questionList.b;
    c_text.innerText=questionList.c;
    d_text.innerText=questionList.d;
}

function deselectAnswers() 
{
  var ele = document.getElementsByName('answer');
    for(i = 0; i < ele.length; i++) {
        ele[i].checked=false;
      }
}

function getSelected() {
    let answer="";
    var ele = document.getElementsByName('answer');
    for(i = 0; i < ele.length; i++) {
                if(ele[i].checked)
                answer=ele[i].id;
            }
    return answer;
}

submitBtn.addEventListener('click', () => {
    // we are getting the value of the option which is selected
    const checkedans=getSelected();
    console.log(checkedans);
    // checking checkedans with correct answer
    if(checkedans===quizData[questionCount].correct)
    {
      score+=1;
    }
    // increasing question count
    questionCount=questionCount+1;
    // removing previous selected answers
    deselectAnswers();
    if(questionCount<quizData.length)
    {
       loadQuiz();
    }
    else
    {
      showScore.innerHTML=`
      <h3>Your Score: ${score}/${quizData.length}</h3>
      <button class="btn" onclick="location.reload()">Play Again</button>
      `
       showScore.classList.remove("scoreArea");
    }
    
})