const askquestions = [

    {
        question: "Q.1: How many squares are there in the following figure?",
         
         a: "35",
         b: "30",
         c: "40",
         d: "50",
         answer:"ans3"
 },
 {
        question: "Q.2:  Count the triangles in picture below?",
         a: " 7",
         b: "9",
         c: "12",
         d: "13",
         answer:"ans4"
 },
 {
        question: "Q.3: Windows, macOS, and Linux are examples of ________.?",
         a: "web browsers",
         b: "mobile devices",
         c: "filmy heroine",
         d: "operating systems",
         answer:"ans4"
 },
 {
        question: "Q.4: What does 'GUI' stands for ?",
         a: "Global user index",
         b: "Graphical user interface",
         c: "golu use iphone",
         d: "none of these above",
         answer:"ans2"
 },
 {
        question: "Q.5: mark zuckerberg is the owner of ?",
         a: "facebook",
         b: " google",
         c: "linux",
         d: "linkedin",
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
