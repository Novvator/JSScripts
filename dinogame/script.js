//get elements from document

var character = document.querySelector("#character");
var replayPrompt = document.querySelector('#replay');
var block = document.querySelector('#block');
var meteor = document.querySelector('#meteor');
var isJumping = false;

//start game

function startGame() {
  document.addEventListener("keydown", (e) =>{
    if(e.code == 'ArrowUp' && !isJumping)
      jump();
  })

  
  block.classList.add("animate-block");
  meteor.classList.add("animate-meteor");

  
}

//character jump function
function jump() {
  isJumping = true;
  if(character.classList != "animate-jump") {
    character.classList.add("animate-jump");
  }
  setTimeout(function() {
    if(character.classList == "animate-jump") {
      character.classList.remove("animate-jump");
    }
    isJumping = false;

  },1050)
}

//check if you lost the game
var checkDead = setInterval(() => {
  var characterBottom = parseInt(window.getComputedStyle(character).getPropertyValue("bottom"));
  var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
  var meteorLeft = parseInt(window.getComputedStyle(meteor).getPropertyValue("left"));
  if(blockLeft<100 && blockLeft>-40 && characterBottom<=65){
    endGame();
  }
  if(meteorLeft<120 && meteorLeft>0 && characterBottom>=40) {
    endGame();
  }
}, 10);


//stop animations when you lose
function endGame() {
  document.removeEventListener("keydown", (e) =>{
    if(e.code == 'ArrowUp' && !isJumping)
      jump();
  })
  block.classList.remove("animate-block");
  block.style.display = "none";
  meteor.classList.add("animate-meteor");
  meteor.style.display = "none";
  alert("u lose");

  if(window.getComputedStyle(replayPrompt).visibility === 'hidden') {
    replayPrompt.style.visibility = 'visible';
    document.addEventListener("keydown", (e) =>{
      if(e.code == 'Space')
        resetGame();
    })
  }
}

//reset game after losing
function resetGame() {
  if(window.getComputedStyle(replayPrompt).visibility === 'visible') {
    replayPrompt.style.visibility = 'hidden';
      document.removeEventListener("keydown", (e) =>{
        if(e.code == 'Space')
          resetGame();
      })
  }
  document.addEventListener("keydown", (e) =>{
    if(e.code == 'ArrowUp' && !isJumping)
      jump();
  })
  block.classList.add("animate-block");
  block.style.display = "block";
  meteor.classList.add("animate-meteor");
  meteor.style.display = "block";
}


startGame();







  



//use async .then ☑
//dont use reload to restart ☑
//stop dino motion when lose
//add meteorite ☑
//randomize interval of coming projectiles ☑
//balance randomized interval