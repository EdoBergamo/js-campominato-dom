let bombe = [];
let punteggio = 0;
let celleScoperte = 0;
let partitaInCorso = true;

function generaBombe(numCelle) {
  while (bombe.length < 16) {
    const bomba = Math.floor(Math.random() * numCelle) + 1;
    if (!bombe.includes(bomba)) {
      bombe.push(bomba);
    }
  }
}

function scopriCella(numeroCella, cella, numCelle) {
  if (!partitaInCorso) {
    return;
  }

  if (bombe.includes(numeroCella)) {
    cella.style.backgroundColor = 'red';
    partitaInCorso = false;
    console.log("Hai calpestato una bomba! Game Over.");
    console.log(`Il tuo punteggio finale è: ${punteggio}`);
  } else {
    cella.style.backgroundColor = 'lightblue';
    punteggio++;
    celleScoperte++;

    if (celleScoperte === (numCelle - bombe.length)) {
      partitaInCorso = false;
      console.log("Hai scoperto tutte le celle sicure! Hai vinto!");
      console.log(`Il tuo punteggio finale è: ${punteggio}`);
    }
  }
}

function generaGriglia() {
  const grigliaDiv = document.getElementById('griglia');
  grigliaDiv.innerHTML = '';

  const livelloDifficolta = document.getElementById('livelloDifficolta').value;
  let dimensioneGriglia = 0;
  let numCelle = 0;

  switch (livelloDifficolta) {
    case '1':
      dimensioneGriglia = 10;
      numCelle = 100;
      break;
    case '2':
      dimensioneGriglia = 9;
      numCelle = 81;
      break;
    case '3':
      dimensioneGriglia = 7;
      numCelle = 49;
      break;
    default:
      break;
  }

  generaBombe(numCelle);

  for (let i = 1; i <= dimensioneGriglia; i++) {
    const riga = document.createElement('div');
    riga.classList.add('row');

    for (let j = 1; j <= dimensioneGriglia; j++) {
      const cella = document.createElement('div');
      cella.classList.add('col-1', 'cella');
      const numeroCella = (i - 1) * dimensioneGriglia + j;
      cella.textContent = numeroCella;
      riga.appendChild(cella);

      cella.addEventListener("click", function () {
        if (partitaInCorso) {
          scopriCella(numeroCella, cella, numCelle);
        }
      });
    }

    grigliaDiv.appendChild(riga);
  }
}

const generaGrigliaBtn = document.getElementById('generaGrigliaBtn');
generaGrigliaBtn.addEventListener('click', generaGriglia);