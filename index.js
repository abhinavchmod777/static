document.querySelector(".search-bar").addEventListener("click",function(){
  this.style.width = "450px";
  document.querySelector(".search-panel").style.width = "100%";
  document.querySelector(".slash").style.display = "none";
})
document.querySelector(".search-bar").addEventListener("focusout",function(){
  this.style.width = "300px";
  document.querySelector(".search-panel").style.width = "250px";
  document.querySelector(".slash").style.display = "inline";
})
