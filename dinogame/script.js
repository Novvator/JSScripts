var character = document.getElementById("character");
document.addEventListener("keydown", (e) =>{
  console.log(e.keyCode)
  if(e.keyCode == 38)
    jump()
})
async function jump() {
  if(character.classList != "animate") {
    character.classList.add("animate")
    character.classList.remove("animate")
  }
}

var checkDead = setInterval(() => {
  var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
  var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
  if(blockLeft<80 && blockLeft>0 && characterTop>=130){
    block.style.animation = "none";
    block.style.display = "none";
    alert("u lose");
  }
}, 10);

//use async .then
//add meteorite
//randomize interval of coming projectiles
//make randomized interval fair