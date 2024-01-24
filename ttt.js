let boxes = document.querySelectorAll(".box");
let msg=document.querySelector(".win");
let count=0;
let iswinner=false;
console.log("iswinner",iswinner);

//To Track User
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        box.innerText=text();
        if(box.innerText!=""){
            box.disabled=true;
            count++;
            iswinner=false;
            console.log(count);
        }
        winner();
        
    })
})

//For Alternate
let player0 = true;
let text = () => {
    if(player0 == true){
        player0 = false;
        return "O";
    }else{
        player0 = true;
        return "X";
    }
}

//draw game
let draw=()=>{
    if(count==9 && iswinner==false){
        msg.classList.remove("hide");
        msg.innerText="Game is Drawn";
        count=0;
    }
}

//Win Cases
let winPattern=[[0,1,2],
[3,4,5],
[6,7,8],
[0,3,6],
[1,4,7],
[2,5,8],
[0,4,8],
[2,4,6]
]

//Main logic
let winner=()=>{
        for(let pattern of winPattern){
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;
        if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
            if (pos1Val === pos2Val && pos2Val === pos3Val) {
                boxes[pattern[0]].style.color="red"
                boxes[pattern[1]].style.color="red"
                boxes[pattern[2]].style.color="red"
              console.log("winner is ",pos1Val);
              msg.classList.remove("hide");
              let Final_msg=`Winner is ${pos1Val}`;
              msg.innerText=Final_msg;
              disable();
              iswinner=true;
              count=0;
            }
        }
    }
    console.log("iswinner",iswinner);
    draw();
}

//Disable
let disable =()=>{
    boxes.forEach((box)=>{
        box.disabled=true;
    })
}

//Reset 
let reset=document.querySelector("#reset");
reset.addEventListener("click",()=>{
    enable();
})

//Enable
let enable=()=>{
    boxes.forEach((box)=>{
        box.innerText="";
        box.style.color="#000001";
        msg.classList.add("hide");
        box.disabled=false;
    })
}