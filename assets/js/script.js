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
        this.style.background = 'lightblue'
        console.log(`hai cliccato la cella numero ${numeroCella}`)
      })
    }

    grigliaDiv.appendChild(riga);
  }
}

const generaGrigliaBtn = document.getElementById('generaGrigliaBtn');
generaGrigliaBtn.addEventListener('click', generaGriglia);