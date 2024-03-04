document.querySelector(".yourscorecount").innerText = localStorage.getItem("yourScore")||0;
document.querySelector(".pcscorecount").innerText = localStorage.getItem("pcScore")||0;
document.querySelector(".rock").addEventListener('click', async()=>{
    document.querySelector(".choosecontainer").style.display="none";
    document.querySelector(".displayResult").style.display="flex";
    document.querySelector(".yourpickimg").src="./image/rock.png";
    const pc=pcpicked();
    const winner=result("scissor", "rock");
    dspyresult(winner);
})
document.querySelector(".paper").addEventListener('click', async()=>{
    document.querySelector(".choosecontainer").style.display="none";
    document.querySelector(".displayResult").style.display="flex";
    document.querySelector(".yourpickimg").src="./image/paper.png";
    const pc=pcpicked();
    const winner=result(pc, "paper");
    dspyresult(winner);
})
document.querySelector(".scissor").addEventListener('click', async()=>{
    document.querySelector(".choosecontainer").style.display="none";
    document.querySelector(".displayResult").style.display="flex";
    document.querySelector(".yourpickimg").src="./image/scissor.png";
    const pc=pcpicked();
    const winner=result(pc, "scissor");
    dspyresult(winner);
})
document.querySelector(".playAgain").addEventListener('click',()=>{
    document.querySelector(".choosecontainer").style.display="flex";
    document.querySelector(".displayResult").style.display="none";
})
document.querySelector(".playagainwin").addEventListener('click', ()=>{
    document.querySelector(".firstcontainer").style.display="flex";
    document.querySelector(".secondcontainer").style.display="none";
})
document.querySelector(".rulesbtn").addEventListener('click',()=>{
    document.querySelector(".x").style.display="block";
    document.querySelector(".rules").style.display="block";
})
document.querySelector(".x").addEventListener('click',()=>{
    document.querySelector(".x").style.display="none";
    document.querySelector(".rules").style.display="none";    
})

const dspyresult = (winner)=>{
    if(winner=="tie"){
        document.querySelector(".result").innerText="TIE UP";
        document.querySelector(".yourpickimg").classList="yourpickimg tie";
        document.querySelector(".pcpickimg").classList="pcpickimg tie";
        document.querySelector(".next").style.display="none"
    }else if(winner=="you"){
        document.querySelector(".result").innerText="YOU WIN";
        document.querySelector(".yourpickimg").classList="yourpickimg win";
        document.querySelector(".pcpickimg").classList="pcpickimg loose";
        let yourScore=localStorage.getItem("yourScore");
        ++yourScore;
        localStorage.setItem("yourScore",yourScore)
        document.querySelector(".yourscorecount").innerText=yourScore;
        document.querySelector(".next").style.display="block";
    }else if(winner=="pc"){
        document.querySelector(".result").innerText="YOU LOST";
        document.querySelector(".yourpickimg").classList="yourpickimg loose";
        document.querySelector(".pcpickimg").classList="pcpickimg win";
        let pcScore=localStorage.getItem("pcScore");
        ++pcScore;
        localStorage.setItem("pcScore",pcScore)
        document.querySelector(".pcscorecount").innerText=pcScore;
        document.querySelector(".next").style.display="none"
    }
}
const pcpicked = () =>{
    const pick = random();
    if(pick==0) {
        document.querySelector(".pcpickimg").src="./image/rock.png";
        return "rock";
    }
    else if(pick==1) {
        document.querySelector(".pcpickimg").src="./image/paper.png";
        return "paper";
    }
    else{
        document.querySelector(".pcpickimg").src="./image/scissor.png";
        return "scissor";
    }
}
const result = (pc,you)=>{
    if(pc==you) return "tie";
    else if(pc=="rock" && you=="paper") return "you";
    else if(pc=="rock" && you=="scissor") return "pc";
    else if(pc=="paper" && you=="scissor") return "you";
    else if(pc=="paper" && you=="rock") return "pc";
    else if(pc=="scissor" && you=="rock") return "you";
    else if(pc=="scissor" && you=="paper") return "pc";

}
const random = () => {
    return Math.floor(Math.random()*3);
}

document.querySelector(".next").addEventListener('click', ()=>{
    document.querySelector(".firstcontainer").style.display="none";
    document.querySelector(".secondcontainer").style.display="flex";
    document.querySelector(".next").style.display="none"
})