//get elements from document
var character = document.querySelector("#character");
var replayPrompt = document.querySelector('#replay');
var rock = document.querySelector('#rock');
var game = document.querySelector('#game');
var meteor = document.querySelector('#meteor');
var isJumping = false;

//start game
//function startGame() {  
//  document.addEventListener("keydown", triggerJump);
//  rock.classList.add("animate-rock");
//  meteor.classList.add("animate-meteor");
//  game.classList.add("animate-bg");
//}


//trigger jump event
function triggerJump(k) {
  if(k.key === 'ArrowUp' && !isJumping) {
    jump();
  }
}

//character jump function
function jump() {
  isJumping = true;
  if(character.classList != "animate-jump") {
    character.classList.add("animate-jump");
  }
  setTimeout(function () {
      if (character.classList == "animate-jump") {
        character.classList.remove("animate-jump");
      }
      isJumping = false;
    },1050)
  
}

//check if you lost the game
var checkDead = setInterval(() => {
  var characterBottom = parseInt(window.getComputedStyle(character).getPropertyValue("bottom"));
  var rockLeft = parseInt(window.getComputedStyle(rock).getPropertyValue("left"));
  var meteorLeft = parseInt(window.getComputedStyle(meteor).getPropertyValue("left"));
  if(rockLeft<70 && rockLeft>-40 && characterBottom<=65){
    endGame();
    alert("u lose");
  }
  if(meteorLeft<120 && meteorLeft>0 && characterBottom>=40) {
    endGame();
    alert("u lose");
  }
}, 10);

//stop animations when you lose and display 'Play again'
function endGame() {
  document.removeEventListener("keydown", triggerJump);
  rock.classList.remove("animate-rock");
  rock.style.display = "none";
  meteor.classList.remove("animate-meteor");
  meteor.style.display = "none";
  game.classList.remove("animate-bg");
  if(window.getComputedStyle(replayPrompt).visibility === 'hidden') {
    replayPrompt.style.visibility = 'visible';
    document.addEventListener("keydown", triggerResetGame);
  }
}

//reset game after losing
function resetGame() {
  if(window.getComputedStyle(replayPrompt).visibility === 'visible') {
    replayPrompt.style.visibility = 'hidden';
      document.removeEventListener("keydown", triggerResetGame);
  }
  document.addEventListener("keydown", triggerJump)
  rock.classList.add("animate-rock");
  rock.style.display = "block";
  meteor.classList.add("animate-meteor");
  meteor.style.display = "block";
  game.classList.add("animate-bg");
}

//trigger reset event
function triggerResetGame(k) {
  if(k.key === ' ') {
    resetGame();
  }
}

endGame();

//use async .then so that you don't overlap jump ☑ (used isJumping flag instead)
//dont use reload to restart ☑
//stop dino motion when lose ☑
//add meteorite ☑
//randomize interval of coming projectiles ☑
//balance randomized interval
//continue background animation from where it stopped