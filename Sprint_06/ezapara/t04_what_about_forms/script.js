function choice (){
  const rad = document.querySelectorAll("input[type=radio]"),
    div = document.querySelector("#alert");
  for (let i = 0; i < rad.length; i++) {
    if (rad[i].checked) {
      if (rad[i].classList.contains("first")) {
        div.innerText = `Shame on you`;
      } else if (rad[i].classList.contains("second")) {
        div.innerText = `Amazing!`;
      } else if (rad[i].classList.contains("third")) {
        div.innerText = `Shame on you`;
      }
    }
  }
}


module.exports = choice()
