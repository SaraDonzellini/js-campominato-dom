const buttonPlay = document.querySelector(".btn");

buttonPlay.addEventListener('click', function () {
  const divBoxElement = document.querySelector(".box");
  divBoxElement.innerHTML = "";
  let bombsArray = [];
  let punteggio = 0;
  const punteggioElement = document.getElementById('punteggio')
  punteggioElement.innerHTML = "";
  punteggio = 0;
  let gameOver = false;

  for (let i = 0; i < 100; i++) {
    let newSquare;
    newSquare = getNewSquare();
    divBoxElement.appendChild(newSquare);
    newSquare.append(i + 1);

    newSquare.addEventListener('click', function () {
      if (!gameOver) {

        if (bombsArray.includes(i + 1)) {
          newSquare.classList.add('bomb');
          alert('Hai perso! Il tuo punteggio:' + ' ' + punteggio);
          gameOver = true;

        } else {

          if (!newSquare.classList.contains("clicked")) {
            punteggio += 1;
            punteggioElement.innerHTML = punteggio;
            newSquare.classList.add('clicked');

            if (punteggio == 84) {
              alert('Hai Vinto! Il tuo punteggio:' + ' ' + punteggio);
            }
          }
        }

      }
    })
  }
  for (let i = 0; i < 16; i++) {
    bombsArray.push(getRandomUniqueNumber(bombsArray, 1, 100));
  }
})

function getNewSquare() {
  const newSquare = document.createElement('div');
  newSquare.classList.add('square');

  return newSquare;
}

function getRandomUniqueNumber(blackList, min, max) {
  let isValid = false;
  let randomNum;

  while (isValid === false) {
    randomNum = getRandomNumber(min, max);

    if (!blackList.includes(randomNum)) {
      isValid = true;
    }
  }

  return randomNum;
}


function getRandomNumber(min, max) {
  const numeroRandomico = Math.floor(Math.random() * (max - min + 1) + min);

  return numeroRandomico;
}

