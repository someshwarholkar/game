let chance = "p1"
const playerCard = document.getElementById("playerCard")
const gameCard = document.getElementById("gameCard")
let player1 = document.getElementById("player1")
let player2 = document.getElementById("player2")

const player1wincount = document.getElementById("player1wincount")
const player2wincount = document.getElementById("player2wincount")
const drawcount = document.getElementById("drawcount")
const totalcosssunt = document.getElementById("totalcount")

let p1count =0, p2count = 0,dcount=0, tcount=0

let player1Name, player2Nam2
function startGame() {
    player1Name = document.getElementById("p1").value
    player2Name = document.getElementById("p2").value
    if (player1Name === "" || player2Name === "") {
        console.log("name required");
        document.getElementById("output").innerHTML =`
        <div class="alert alert-danger">please enter name</div>`
        setTimeout(()=>{
            document.getElementById("output").innerHTML =""
        },2000)

    } else {
      player1.innerHTML= player1Name
      player2.innerHTML=player2Name
        playerCard.classList.add("d-none")
        gameCard.classList.remove("d-none")

    }

}

function game(id) {
    const box = document.getElementById(id)
    const isRed = box.classList.contains("bg-danger")
    const isGreen = box.classList.contains("bg-success")
    if (!isRed && !isGreen) {


        if (chance === "p1") {
            box.classList.add("bg-danger")
            box.innerHTML = `<h1> X </h1>`
            chance = "p2"

        } else {

            box.classList.add("bg-success")
            box.innerHTML = `<h1> O </h1>`
            chance = "p1"
        }
    }
    if (!winner() && checkAllFill()) {
        console.log("draw match");
        dcount++
          resetGame()
    }

}

function winner() {
    return (

        checkWinner("b1", "b2", "b3", "bg-danger") ||
        checkWinner("b4", "b5", "b6", "bg-danger") ||
        checkWinner("b7", "b8", "b9", "bg-danger") ||
        checkWinner("b7", "b8", "b9", "bg-danger") ||
        checkWinner("b1", "b4", "b7", "bg-danger") ||
        checkWinner("b2", "b5", "b8", "bg-danger") ||
        checkWinner("b3", "b6", "b9", "bg-danger") ||
        checkWinner("b1", "b5", "b9", "bg-danger") ||
        checkWinner("b3", "b5", "b7", "bg-danger") ||
        checkWinner("b1", "b2", "b3", "bg-success") ||
        checkWinner("b4", "b5", "b6", "bg-success") ||
        checkWinner("b7", "b8", "b9", "bg-success") ||
        checkWinner("b7", "b8", "b9", "bg-success") ||
        checkWinner("b1", "b4", "b7", "bg-success") ||
        checkWinner("b2", "b5", "b8", "bg-success") ||
        checkWinner("b3", "b6", "b9", "bg-success") ||
        checkWinner("b1", "b5", "b9", "bg-success") ||
        checkWinner("b3", "b5", "b7", "bg-success")

    )

}
function checkWinner(id1, id2, id3, color) {
    const isBox1 = document.getElementById(id1).classList.contains(color)
    const isBox2 = document.getElementById(id2).classList.contains(color)
    const isBox3 = document.getElementById(id3).classList.contains(color)
    if (isBox1 && isBox2 && isBox3) {
        console.log(`🎉🍾 congratulation ${color} is win`);
        document.getElementById("output").innerHTML = ` 
        <div class="alert alert-primary">
             ${color === "bg-danger" ? "Player 1 " : "Player 2"} winner
          </div>
        `
        setTimeout(function () {
            document.getElementById("output").innerHTML = ""
        }, 2000)
        setTimeout(function () {
            resetGame()
        }, 2000)

        color === "bg-danger"
             ? p1count ++
             : p2count ++
           

        return true
    }
    return false


}

function resetGame() {
    for (let i = 1; i <= 9; i++) {
        document.getElementById(`b${i}`).innerHTML = i
        document.getElementById(`b${i}`).classList.remove("bg-success")
        document.getElementById(`b${i}`).classList.remove("bg-danger")

    }
    tcount++
    stat()
   }
   function stat() {
    totalcount.innerHTML = tcount
    drawcount.innerHTML = dcount
    player1wincount.innerHTML =p1count
    player2wincount.innerHTML =p2count
    
   }

function checkAllFill() {
    let boxCount = 0
    for (let i = 1; i <= 9; i++) {

        const isRed = document.getElementById(`b${i}`).classList.contains("bg-danger")
        const isGreen = document.getElementById(`b${i}`).classList.contains("bg-success")
        if (isRed || isGreen) {
            boxCount++
        }

    }
    return boxCount === 9 ? true : false;

}