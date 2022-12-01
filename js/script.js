const buttonPlay = document.querySelector(".btn");
let bombsArray = [];

buttonPlay.addEventListener('click', function () {

    const divBoxElement = document.querySelector(".box");
    divBoxElement.innerHTML = "";
    divBoxElement.classList.add('my_border');
    let newSquare;

    for (let i = 0; i < 100; i++) {
      newSquare = getNewSquare();
      divBoxElement.appendChild(newSquare);
      newSquare.append(i + 1);
    }

    for (let i = 0; i < 16; i++) {
      bombsArray.push(getRandomUniqueNumber(bombsArray, 1, 100));
    }

    

})

console.log(bombsArray)

function getNewSquare() {
  const newSquare = document.createElement("div");
  newSquare.classList.add('square');

  newSquare.addEventListener("click", function () {
    newSquare.classList.toggle('clicked');
  })
  return newSquare;
}


function getRandomUniqueNumber(blackList, min, max){
  let isValid = false;
  let randomNum;

  while (isValid === false) {
    randomNum = getRandomNumber(min,max);

    if (!blackList.includes(randomNum)){
      isValid = true;
    }
  }

  return randomNum;
}


function getRandomNumber (min, max){
  const numeroRandomico = Math.floor(Math.random() * (max - min + 1) + min);

  return numeroRandomico;
}


