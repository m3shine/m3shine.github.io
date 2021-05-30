
function gitalkshow(){
  let sty = document.getElementById("gitalk-container").style.display
  if (sty == "" || sty == "none") {
    document.getElementById("gitalk-container").style.display = "block"
  }else{
    document.getElementById("gitalk-container").style.display = "none"
  }
}