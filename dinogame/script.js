var character = document.getElementById("character");
document.addEventListener("keydown", (e) =>{
  console.log(e.code)
  if(e.code == 'ArrowUp' && !isJumping)
    jump();
})

var isJumping = false;


const replay = document.querySelector('#replay');

function jump() {
  isJumping = true;
  if(character.classList != "animate") {
    character.classList.add("animate");
  }
  setTimeout(function() {
    if(character.classList == "animate") {
      character.classList.remove("animate");
    }
    isJumping = false;

  },1050)
}

function toggleVisibility(element) {
  if(window.getComputedStyle(element).visibility === 'hidden') {
    element.style.visibility = 'visible';
    console.log('revealed it');
    document.addEventListener("keydown", (e) =>{
      if(e.code == 'Space')
        location.reload();
    })
  } else {
      element.style.visibility = 'hidden';
      document.removeEventListener("keydown", (e) =>{
        if(e.code == 'Space')
          location.reload();
      })
  }
  
}
var checkDead = setInterval(() => {
  var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
  var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
  if(blockLeft<80 && blockLeft>0 && characterTop>=280){
    block.style.animation = "none";
    block.style.display = "none";
    alert("u lose");
    toggleVisibility(replay);

  }
}, 10);

//use async .then ☑
//dont use reload to restart
//stop dino motion when lose
//add meteorite
//randomize interval of coming projectiles
//make randomized interval fair