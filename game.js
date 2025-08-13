var HumanScore = 0;
var CompScore = 0;

function getCompChoice(){
  let choices = ["rock","paper","scissor"]
  let value=Math.floor(Math.random() * choices.length);
  let word = choices[value];
  return word;

}

function getHumanChoice(){
    let human = prompt("Enter your choice");
    let small = human.toLowerCase;
    return human;
}

function playRound(humanChoice,compChoice){
    let human=getHumanChoice();
    console.log("You chose"+" "+human);
    let comp=getCompChoice();
    console.log("Computer chose"+" "+comp);

    if(human=="rock"&&comp=="paper"){
        console.log("You lose");
        let result = ++CompScore;
        console.log("Computer Score is"+" "+CompScore);
        console.log("\n")
    }else if(human=="rock"&&comp=="scissor"){
        console.log("You won");
        let result = ++HumanScore;
        console.log("Human Score is"+" "+HumanScore);
        console.log("\n")
    }else if(human=="scissor"&&comp=="rock"){
        console.log("You lose");
        let result = ++CompScore;
        console.log("Computer Score is"+" "+CompScore);
        console.log("\n")
    }else if(human=="paper"&&comp=="rock"){
        console.log("You won");
        let result = ++HumanScore;
        console.log("Human Score is"+" "+HumanScore);
        console.log("\n")
    }else if(human=="paper"&&comp=="scissor"){
        console.log("You lose");
        let result = ++CompScore;
        console.log("Computer Score is"+" "+CompScore);
        console.log("\n")
    }else if(human=="scissor"&&comp=="paper"){
        console.log("You won");
        let result = ++HumanScore;
        console.log(" Score is"+" "+HumanScore);
        console.log("\n")
    }else if(human=="rock"&&comp=="rock"){
        console.log("It's a Tie");
        console.log(HumanScore);
        console.log("\n")
    }else if(human=="paper"&&comp=="paper"){
        console.log("It's a Tie");
        console.log(HumanScore);
        console.log("\n")
    }else if(human=="scissor"&&comp=="scissor"){
        console.log("It's a Tie");
        console.log(HumanScore);
        console.log("\n")
    }
   
}
function game(){
    for(i=0;i<5;i++){
        playRound();
    }
}
game();
if(HumanScore > CompScore){
    console.log("Human Win");
}else if(HumanScore == CompScore){
    console.log("It's a Tie")
}
else{
    console.log("You lose");
}

