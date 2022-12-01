const buttonPlay = document.querySelector(".btn");
let slotArray = [];

buttonPlay.addEventListener('click', function () {
  
  const divBoxElement = document.querySelector(".box");
  divBoxElement.innerHTML = "";
  divBoxElement.classList.add('my_border');
  let bombsArray = [];
  let punteggio = 0;
  const punteggioElement = document.getElementById('punteggio')
  
  for (let i = 0; i < 100; i++) {
    let newSquare;
    newSquare = getNewSquare();
    divBoxElement.appendChild(newSquare);
    newSquare.append(i + 1);
    slotArray.push(i + 1)
    
    newSquare.addEventListener('click', function () {
      if (bombsArray.includes(i + 1)) {
        newSquare.classList.add('bomb');
        alert('Hai perso')
      } else {
        newSquare.classList.toggle('clicked');
        if (punteggio == 84) {
          alert('Hai Vinto')
        } else {
          punteggio +=1;
          punteggioElement.innerHTML = punteggio; 
        }
        

    
      }
    })
    
  }
  
  for (let i = 0; i < 16; i++) {
    bombsArray.push(getRandomUniqueNumber(bombsArray, 1, 100));
  }
  
  
  console.log(slotArray)
  console.log(bombsArray)
  
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

