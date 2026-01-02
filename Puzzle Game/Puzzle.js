var rows = 5;
var columns = 5;

var currTile;
var otherTile;

var turns = 0;


window.onload = function() {
    //initialize the 5x5 board
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < columns; c++) {
            //<img>
            let tile = document.createElement("img");
            tile.src = "img/coral.jpg";

        //Drag functionality
        tile.addEventListener("dragstart", dragStart); //click on image to drag
        tile.addEventListener("dragover", dragOver); //drag an image
        tile.addEventListener("dragenter", dragEnter); // dragging an image into another one
        tile.addEventListener("dragleave", dragLeave);// dragging an image away from another one
        tile.addEventListener("drop", dragDrop); //drop an image into another one
        tile.addEventListener("dragend", dragEnd); //after you completed dragDrop 

        document.getElementById("board").append(tile);
        }
    }


  //Drag functionality
        

    //pieces
    let pieces = [];
    for (let i=1; i <= rows*columns; i++){
        pieces.push(i.toString()); //put "1" to "25" into the array (puzzle images names)
    }

for (let i = 0; i < pieces.length; i++) {
   let j = Math.floor(Math.random() * pieces.length);

   //Swap
    let tmp = pieces[i];
    pieces[i] = pieces[j];
    pieces[j] = tmp;
   }

    for (let i = 0; i < pieces.length; i++) {
       let tile = document.createElement("img");
       tile.src = "img/" + pieces [i] + ".jpg";

       //Drag functionality
       tile.addEventListener("dragstart", dragStart); //click on image to drag
       tile.addEventListener("dragover", dragOver); //drag an image
       tile.addEventListener("dragenter", dragEnter); // dragging an image into another one
       tile.addEventListener("dragleave", dragLeave);// dragging an image away from another one
       tile.addEventListener("drop", dragDrop); //drop an image into another one
       tile.addEventListener("dragend", dragEnd); //after you completed dragDrop 
      // tile.addEventListener("pieces"), append(tile);

       document.getElementById("pieces").append(tile);
    }

}

//Drag tiles
function dragStart(){
    currTile = this; //this refers to image that was clicked on for dragging
}

function dragOver(e){
    e.preventDefault();
}

function dragEnter(e){
    e.preventDefault();
}

function dragLeave(){

}

function dragDrop(){
    otherTile = this; //this refers to image that is being dropped on
}

function dragEnd(){
    if (currTile.src.includes("coral.jpg")){
        return; // Prevent swapping if dragging a placeholder
    }
  let currImg = currTile.src;
  let otherImg = otherTile.src;
  currTile.src = otherImg;
  otherTile.src = currImg;

  turns += 1;
  document.getElementById("turns").innerText = turns;

    if (checkWin(true)) {
        showVictory();
    }
}

function checkWin() {
    let board = document.getElementById("board");
    let tiles = board.children;


    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < columns; c++) {
            let index = r * columns + c;

            let actualFilename = tiles[index].src.split('/').pop();
            let expectedFilename = winningConditions [r] [c].split('/').pop();


            console.log(`Position [${r}][${c}]: Expected ${expectedFilename}, Got ${actualFilename}`);
            if (actualFilename !== expectedFilename) {
                return false;
            }
        }
    }

    console.log("You Won")
    return true;
}

function showVictory() {
    alert(`You Won! Turns: ${turns}`);
}

let winningConditions = [
    ["1.jpg", "25.jpg", "2.jpg", "3.jpg", "4.jpg"],  // Row 1
    ["19.jpg", "20.jpg", "6.jpg", "7.jpg", "5.jpg"], // Row 2
    ["9.jpg", "10.jpg", "22.jpg", "8.jpg", "11.jpg"], // Row 3
    ["12.jpg", "13.jpg", "14.jpg", "15.jpg", "23.jpg"], // Row 4
    ["24.jpg", "16.jpg", "17.jpg", "18.jpg", "21.jpg"]  // Row 5
      ]

function showVictory() {
    document.getElementById('finalTurns').innerText = turns;
    document.getElementById('victoryModal').style.display = 'block';
}

function closeModal() {
    document.getElementById('victoryModal').style.display = 'none';
    location.reload();
}