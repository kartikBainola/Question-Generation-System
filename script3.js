const askquestions = [

    {
        question: "Q.1: In 1768, Captain James Cook set out to explore which ocean?",
         
         a: "Pacific Ocean",
         b: "Atlantic Ocean",
         c: "Indian Ocean",
         d: "Arctic Ocean",
         answer:"ans1"
 },
 {
        question: "Q.2: What is actually electricity?",
         a: "A flow of water",
         b: "A flow of air",
         c: "A flow of electrons",
         d: "A flow of atoms",
         answer:"ans3"
 },
 {
        question: "Q.3: Which of the following is not an international organisation?",
         a: "FIFA",
         b: "NATO",
         c: "ASEAN",
         d: "FBI",
         answer:"ans4"
 },
 {
        question: "Q.4: Which of the following disorders is the fear of being alone?",
         a: "Agoraphobia",
         b: "Aerophobia",
         c: "Acrophobia",
         d: "Arachnophobia",
         answer:"ans1"
 },
 {
        question: "Q.5: Which of the following is a song by the German heavy metal band “Scorpions”?",
         a: "Stairway to Heaven",
         b: "Wind of Change",
         c: "Don’t Stop Me Now",
         d: "Hey Jude",
         answer:"ans2"
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
