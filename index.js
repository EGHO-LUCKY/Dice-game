function getCardString() {
    let card_number = Math.floor((Math.random() * 6) + 1);
    return "Images/card" + card_number + ".png";
}

let player1 = getCardString();
let player2 = getCardString();


let imgQuery = document.querySelectorAll("img");
imgQuery[0].setAttribute("src", player1);
imgQuery[1].setAttribute("src", player2);

if (player1 > player2) 
    document.querySelector("h1").innerHTML = "Player 1 wins <span class='fi fi-ng'></span>"
else if (player2 > player1)
    document.querySelector("h1").innerHTML = "<span class='fi fi-ng'></span> Player 2 wins"
else 
    document.querySelector("h1").innerHTML = "Draw <span class='fi fi-ng'></span>"