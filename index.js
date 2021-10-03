var noofbuttons=document.querySelectorAll(".drum").length;
for (var i=0;i<noofbuttons;i++){
document.querySelectorAll(".drum")[i].addEventListener("click",function(){
  var pressedbutton=this.innerHTML;
  makesound(pressedbutton);
  buttonanimation(pressedbutton);
});
}
document.addEventListener("keypress",function(event){
  makesound(event.key);
  buttonanimation(event.key);
})
  function makesound(key){
  switch(key){
    case "w":
    var audio=new Audio("sounds/crash.mp3");
    audio.play();
    break;
    case "a":
    var audio=new Audio("sounds/kick-bass.mp3");
    audio.play();
    break;
    case "s":
    var audio=new Audio("sounds/snare.mp3");
    audio.play();
    break;
    case "d":
    var audio=new Audio("sounds/tom-1.mp3");
    audio.play();
    break;
    case "j":
    var audio=new Audio("sounds/tom-2.mp3");
    audio.play();
    break;
    case "k":
    var audio=new Audio("sounds/tom-3.mp3");
    audio.play();
    break;
    case "l":
    var audio=new Audio("sounds/tom-4.mp3");
    audio.play();
    break;
    default:console.log(this.innerHTML);
  }
}
function buttonanimation(event){
  var activebutton=document.querySelector("."+event);
  activebutton.classList.add("pressed");
  setTimeout(function(){
    activebutton.classList.remove("pressed");
  },100);
}
