
function gitalkshow(){
  let sty = document.getElementById("gitalk-container").style.display
  if (sty !== "block") {
    document.getElementById("gitalk-container").style.display = "block"
  }else{
    document.getElementById("gitalk-container").style.display = "none"
  }
}
