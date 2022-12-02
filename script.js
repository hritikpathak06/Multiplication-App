const num1 = Math.floor(Math.random()*10);
console.log(num1)
const num2 = Math.floor(Math.random()*10);

const questionEl = document.getElementById('question');
const formEl = document.getElementById('form');
const inputEl = document.getElementById('input');
const scoreEl =document.getElementById('score');


let score = JSON.parse(localStorage.getItem("score"));
if(!score){
    score = 0;
}

scoreEl.innerText = `Score: ${score}`;

// for inner text in question
questionEl.innerText = `What is ${num1} multiply by ${num2} ?`;

const correctAns = num1*num2;


// adding eventlistener on form id
formEl.addEventListener("submit", () => {
    const userAns = +inputEl.value; // (adding + sign inorder to make it integer)
    console.log(userAns, typeof userAns)//its a string 
     if(userAns == correctAns){
        score++
        console.log(score)
        updateLocalStorage()
     }
     else{
        score--;
        console.log(score)
        updateLocalStorage()
     }
  
})

function updateLocalStorage(){
    localStorage.setItem("score",JSON.stringify(score))
}