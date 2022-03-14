let color = "white";
let board;

function populateBoard(size){
    board = document.querySelector(".board");
    board.style.gridTemplateColumns = `repeat(${size} , 1fr)`;
    board.style.gridTemplateRows = `repeat(${size} , 1fr)`;
    
  
    let amount = size * size;
    for (let i = 0; i < amount; i++){
        let square = document.createElement("div");
        square.style.backgroundColor = "white";
        board.append(square);
        square.addEventListener("mouseover", ()=>{
            square.style.backgroundColor = `${color}`;
        })
        const resetButton = document.getElementById("reset").addEventListener("click", ()=>{
            square.style.backgroundColor = "white";
            console.log("reset")
            color = "white";
        });

        let inputColor = document.getElementById("inputColor");
        const setColorButton = document.getElementById("setColor")
        setColorButton.addEventListener("click",()=>{ 
            color = inputColor.value;
           
    
        })
    }

   
}
populateBoard(100);

const black = document.getElementById("black").addEventListener("click", ()=>{
    color = "black";
});
const blue = document.getElementById("blue").addEventListener("click", ()=>{
    color = "blue";
});

const red = document.getElementById("red").addEventListener("click", ()=>{
    color = "red";
})
const yellow = document.getElementById("yellow").addEventListener("click", ()=>{
    color = "yellow";
})
const orange = document.getElementById("orange").addEventListener("click",()=>{
    color = "orange";
} )
const green = document.getElementById("green").addEventListener("click", ()=>{
    color = "green";
})
const violet = document.getElementById("violet").addEventListener("click", ()=>{
    color = "violet"
})

    
