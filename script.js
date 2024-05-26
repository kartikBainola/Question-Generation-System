const askquestions = [

    {
        question: " Q1:What is the capital of India ?",
        a: "Chandigarh",
        b: "Delhi",
        c: "Moga",
        d: "Mumbai",
        answer: "ans2"
    },



    {
        question: "Q2:What is the capital of Punjab ?",
        a: "Patiala",
        b: "Moga",
        c: "Amritsar",
        d: "Chandigarh",
        answer: "ans4"
    },



    {
        question: "Q3:What is the capital of Maharashtara ?",
        a: "Pune",
        b: "Mumbai",
        c: "Jandiala",
        d: "Varanasi",
        answer: "ans2"
    },



    {
        question: "Q4:What is the capital of Madhya Pradesh ?",
        a: "Lucknow",
        b: "Delhi",
        c: "Bhopal",
        d: "Indore",
        answer: "ans4"
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
