const win = document.getElementById("wins")

const player = document.getElementById("player1")
const com = document.getElementById("comp")
const comclic = document.getElementById("com-clic")
const player1clic = document.getElementById("clic")

let y = ["Rock","Paper","Scissor"]
let player1 = 0
let comp = 0

function getcolor () {
    if (win.textContent=="win"){
        win.style.color = "lightgreen"
    }
    if (win.textContent != "win"){
        win.style.color = "bisque"
    }
}

rock.addEventListener("click", function() {
    let x = Math.floor(Math.random()*3)

    player1clic.textContent = "Rock"
    comclic.textContent = y[x]

    if(y[x]== "Rock"){
        win.textContent = "Draw"
        console.log(y[x])
        getcolor()
    }
    else if(y[x]== "Scissor"){
        win.textContent = "win"
        console.log(y[x])
        player1 += 1
        getcolor()
    }
    else {
        win.textContent = "Lose"
        console.log(y[x])
        comp += 1
        getcolor()
    }
    player.textContent = player1
    com.textContent = comp
})

paper.addEventListener("click", function() {
    let x = Math.floor(Math.random()*3)

    player1clic.textContent = "Paper"
    comclic.textContent = y[x]
   
    if(y[x]== "Rock"){
        win.textContent = "win"
        console.log(y[x])
        player1 += 1
        getcolor()
    }
    else if(y[x]== "Scissor"){
        win.textContent = "Lose"
        console.log(y[x])
        comp += 1
        getcolor()
    }
    else {
        win.textContent = "Draw"
        console.log(y[x])
        getcolor()
    }
    player.textContent = player1
    com.textContent = comp
})

scissor.addEventListener("click", function() {
    let x = Math.floor(Math.random()*3)

    player1clic.textContent = "Scissor"
    comclic.textContent = y[x]
    
    if(y[x]== "Paper"){
        win.textContent = "win"
        console.log(y[x])
        player1 += 1
        getcolor()
    }
    else if(y[x]== "Rock"){
        win.textContent = "Lose"
        console.log(y[x])
        comp += 1
        getcolor()
    }
    else {
        win.textContent = "Draw"
        console.log(y[x])
        getcolor()
    }
    player.textContent = player1
    com.textContent = comp
})


reset.addEventListener("click", function() {
    win.textContent = " "
    win.style.color = "bisque"
    player1clic.textContent = " "
    comclic.textContent = " "
    player.textContent = " "
    com.textContent = " "
    player1 = 0
    comp = 0
})

