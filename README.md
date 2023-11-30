# Campo Minato

## Descrizione dell'esercizio

- **Nome repository:** `js-campominato-dom`
- **Obiettivo:** Implementare il gioco Campo Minato utilizzando JavaScript con il supporto del DOM.

### Istruzioni

- Clonare la griglia realizzata precedentemente nella nuova repository e aggiungere la logica del gioco.
- Copiare l'`index.html`, le cartelle `js/` e `css/` con i rispettivi script e fogli di stile nella nuova repository.

### Funzionamento del gioco

- Il computer deve generare 16 numeri casuali all'interno dello stesso range della difficoltà prescelta, i quali rappresenteranno le bombe.
- Non possono essere posizionate più di una bomba nella stessa cella.
- L'utente clicca su una cella:
  - Se il numero è presente nella lista delle bombe, la cella si colora di rosso e la partita termina.
  - Altrimenti, la cella cliccata si colora di azzurro e il gioco continua.
- La partita termina quando il giocatore clicca su una bomba o quando rivela tutte le celle che non sono bombe.
- Al termine della partita, il software comunica il punteggio, ovvero il numero di volte in cui l’utente ha cliccato su una cella che non era una bomba.

### Bonus

- Aggiunta di una select accanto al bottone di generazione che consente la scelta tra tre diversi livelli di difficoltà:
  - Difficoltà 1: 100 caselle (10x10).
  - Difficoltà 2: 81 caselle (9x9).
  - Difficoltà 3: 49 caselle (7x7).

### Super Bonus

- Evitare che l'utente possa cliccare su altre celle dopo aver cliccato su una bomba.
- Quando la partita termina a causa del clic su una bomba, il software mostra tutte le bombe nascoste.