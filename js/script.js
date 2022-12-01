const buttonPlay = document.querySelector(".btn");


buttonPlay.addEventListener('click', function () {

    const divBoxElement = document.querySelector(".box");
    divBoxElement.innerHTML = "";
    divBoxElement.classList.add('my_border');
  
    for (let i = 0; i < 100; i++) {
      const newSquare = getNewSquare();
      divBoxElement.appendChild(newSquare);
      newSquare.append(i + 1);
    }


})



function getNewSquare() {
  const newSquare = document.createElement("div");
  newSquare.classList.add('square');

  newSquare.addEventListener("click", function () {
    newSquare.classList.toggle('clicked');
  })
  return newSquare;
}