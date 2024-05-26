const askquestions = [

    {
        question: "Q.1: Which month comes right before june ?",
         a: "may",
         b: "september",
         c: "july",
         d: "august",
         answer:"ans3"
 },
 {
        question: "Q.2: What color is a banana? ?",
         a: "red",
         b: "yellow",
         c: "white",
         d : "Blue",
         answer:"ans2"
 },
 {
        question: "Q.3: 3 + 4 = 7 ?",
         a: "False",
         b: "True",
         c: "Don't know",
         d: "none of these above",
         answer:"ans2"
 },
 {
        question: "Q.4: What time of day do we have breakfast?",
         a: "In the afternoon",
         b: "In the evening",
         c: "In the night",
         d: "In the morning",
         answer:"ans4"
 },
 {
        question: "Q.5: What is 20 + 6?",
         a: "26",
         b: "56",
         c: "78",
         d: "99",
         answer:"ans1"
 }
 
    
];

var question = document.getElementById("question")
var optionA = document.getElementById("optionA")
var optionB = document.getElementById("optionB")
var optionC = document.getElementById("optionC")
var optionD = document.getElementById("optionD")
var submitanswers = document.getElementById("submit")
var answers = document.querySelectorAll('.answer')
var showscores=document.getElementById("scores")

let count=0;
var score=0;
const execute = () =>{

   question.innerHTML=askquestions[count].question;
   optionA.innerHTML=askquestions[count].a;
   optionB.innerHTML=askquestions[count].b;
   optionC.innerHTML=askquestions[count].c;
   optionD.innerHTML=askquestions[count].d;

}

execute();

const getcheckedanswer = () =>{

    let answer;
    answers.forEach((currentelem)=>{
 
        if(currentelem.checked){
            answer=currentelem.id
        }
    });
    return answer;
}

submitanswers.addEventListener('click',()=>{
var checkedanswer=getcheckedanswer();
 console.log(checkedanswer);

if(checkedanswer==askquestions[count].answer){
         score++;
}


var deselect = ()=>{
    answers.forEach((currelem)=>currelem.checked=false)
}


count++;


deselect();
if(count<askquestions.length){
    execute();
}

else{
    showscores.innerHTML=`
    <h3 style="padding-top:20px;"> Your Score ${score}/${askquestions.length}</h3>
    <button class="btnclass" style="margin-bottom:20px; padding:8px; font-size:22px; cursor:pointer; 
    background-color:#3d0c02; color:orange;"
     onclick="location.reload()">Start Again</button>
    `
    showscores.style.display = "block";
}

})
