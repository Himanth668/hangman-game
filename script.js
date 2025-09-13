let fruits = ["apple","banana","orange"];
let names = ["raju","rani","ravi"];
let animals = ["lion","tiger","monkey","dog","cat"];
let list = ["names","fruits","animals"];
let listword = list[Math.floor(Math.random()*list.length)];
let item1;
let use = document.getElementById("hint");
if (listword == "fruits"){
    item1 = fruits;
    use.innerHTML = "it is a fruit name....🍒"
}
else if (listword == "names"){
    item1 = names;
    use.innerHTML = "it is a name....🕵🏽"
}
if (listword == "animals"){
    item1 = animals;
    use.innerHTML = "it is a animal name....🐕"
}
let word = item1[Math.floor(Math.random()*item1.length)];
let item = document.getElementById("word");
let win = document.getElementById("win");
let img = document.getElementById("image");
console.log(word);
item.innerHTML =""
let wrongGuess = 0;
for (let i=0; i < word.length; i++){ 
    item.innerHTML += "_ ";
  }
let input =document.getElementById("text");
let guess = Array(word.length).fill("_")
function checkLetter(){
    let letter = input.value.toLowerCase();
    console.log(letter)
    if (!/^[a-z]$/.test(letter)) {
        alert("Please enter a single alphabet letter.");
        return;
      }
    let found = false;
    for (let i=0;i<word.length;i++){
        if (letter == word[i]){
            guess[i] = letter;
            found = true;
        }
    }
        item.innerHTML = guess.join(" ");
        input.value = ""   
        if(!found){
            wrongGuess++;
            if (wrongGuess<7){
                img.src = `C:/Users/MyPC/Downloads/hangman-game-images/hangman-${wrongGuess}.svg`;
                win.innerHTML = "TRY AGAIN ! 😴"
            }
        }
    if(guess.join("") === word){
        win.innerHTML = "you win the game 🤩";
        input.disabled = true;    
    }
    else if (wrongGuess == 6){
        win.innerHTML = "you loss the game 😭";
        input.disabled = true;
    }
}
