let HumanScore = 0;
let CompScore = 0;

function getCompChoice(){
  let choices = ["✊🏻","🖐🏻","✌🏻"]
  let value=Math.floor(Math.random() * choices.length);
  let word = choices[value];
  return word;

}

const outcome = document.getElementById('outcome');
const user = document.getElementById('user');
const comp = document.getElementById('comp');
const score = document.getElementById('score');
const hc = document.getElementById('hc');
const cc = document.getElementById('cc');
const rock  = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissor = document.getElementById('scissor');
const start = document.getElementById('restart');

rock.addEventListener('click',()=> playRound("✊🏻"));
paper.addEventListener('click',()=> playRound("🖐🏻"));
scissor.addEventListener('click',()=> playRound("✌🏻"));
start.addEventListener('click',restart);


function playRound(human,compChoice){ 
    
    let comp=getCompChoice();

    if(human== comp){

        result = "It's a Tie"
    }else if((human=="🖐🏻"&&comp=="✊🏻")||
    (human=="✌🏻"&&comp=="🖐🏻")||
    (human=="✊🏻"&&comp=="✌🏻")){
        HumanScore++;
        result = "You Win !!";
    }else if((human=="✌🏻"&&comp=="✊🏻")||
    (human=="🖐🏻"&&comp=="✌🏻")||
    (human=="✊🏻"&&comp=="🖐🏻")){
        CompScore++;
        result = "You Lose !!";
    }
    hchoice = "You Chose :"+" "+human;
    cchoice = "I Chose :"+" "+comp;
    cc.textContent = cchoice;
    hc.textContent = hchoice;
    userscore = `Score  ${HumanScore} : ${CompScore}`;
    score.textContent = userscore;
    outcome.textContent = result;



    if(HumanScore === 5 || CompScore === 5 ){
    if(HumanScore > CompScore){
        outcome.textContent = "Finally!!! You won!!";
    }
    else{
        outcome.textContent = "LOSER !!!";
    }
    disable();
}
}

function disable(){
    rock.disabled = true;
    paper.disabled = true;
    scissor.disabled = true;
}
function enable(){
    rock.disabled = false;
    paper.disabled =false;
    scissor.disabled = false;
}

function restart(){
    HumanScore = 0;
    CompScore = 0;
    outcome.textContent = '';
    score.textContent = `Score ${HumanScore}:${CompScore}`
    enable();
    hc.textContent = ' ';
    cc.textContent = ' ';   
    
}

