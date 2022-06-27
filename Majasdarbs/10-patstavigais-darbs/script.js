window.addEventListener('DOMContentLoaded', () => {
    // Pievienojam eventlisenerus reset pogai, rūtiņai un paziņojuma, kurš uzvareja
    const cells = Array.from(document.querySelectorAll('.cell'));
    const playerDisplay = document.querySelector('.display-player');
    const resetButton = document.querySelector('#reset');
    const announcer = document.querySelector('.announcer');

//    Sākotnēji mēs pasakam, ka rūtiņas ir tukšas un spēli sāk X, ko sauksim par krustiņu
    let board = ['', '', '', '', '', '', '', '', ''];
    let currentPlayer = 'X';
    let isGameActive = true;

    const PLAYERX_WON = 'KRUSTIŅŠ UZVARĒJA';
    const PLAYERO_WON = 'NULLĪTE UZVARĒJA';
    const TIE = 'NEIZŠĶIRTS';

    // Šeit mēs nosakam, kādas kombinācijas uzvar: 3 vertikāli, 3 horizontāli un 2 diagonāli;
     const winningConditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
cells.forEach( (cell, index) => {
    cell.addEventListener('click', () => userAction (cell, index))
});
//Uzsākam spēli;
const userAction = (cell, index) => {
    if(isValidAction(cell) && isGameActive) {
        cell.innerText = currentPlayer;
        cell.classList.add(`player${currentPlayer}`);
        updateBoard(index);
        handleResultValidation();
        changePlayer();
    }
}
// Mainām spēlētāju
const changePlayer = () => {
    playerDisplay.classList.remove(`player${currentPlayer}`);
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    playerDisplay.innerText = currentPlayer;
    playerDisplay.classList.add(`player${currentPlayer}`);
}
//Pārbaudām krustiņs vai nullīte uzvarēja
function handleResultValidation() {
    let roundWon = false;
    // 8 iespējamie varianti, kā var uzvarēt  
    for (let i = 0; i <= 7; i++) {
        const winCondition = winningConditions[i];
        const a = board[winCondition[0]];
        const b = board[winCondition[1]];
        const c = board[winCondition[2]];
       // jebkurā ja viena no pirmajā trijām rūtiņām ir tukša, tad mēs izlaižam iterāciju, jo uzvarētaja nav, spēle ir jāturpina 
        if (a === '' || b === '' || c === '') {
            continue;
        }
        //
        if (a === b && b === c) {
            roundWon = true;
            break;
        }
    }
if (roundWon) {
        announce(currentPlayer === 'X' ? PLAYERX_WON : PLAYERO_WON);
        isGameActive = false;
        return;
    }

if (!board.includes(''))
    announce(TIE);
}
// šeit mēs pārliecināmies, ka spēlētāji var likt tikai tukšos lauciņos 
const isValidAction = (cell) => {
    if (cell.innerText === 'X' || cell.innerText === 'O'){
        return false;
    }

    return true;
};

const updateBoard =  (index) => {
    board[index] = currentPlayer;
}

//Paziņojam uzvaretāju
const announce = (type) => {
    switch(type){
        case PLAYERO_WON:
            announcer.innerHTML = 'NULLĪTE <span class="playerO"></span> uzvarēja';
            break;
        case PLAYERX_WON:
            announcer.innerHTML = 'Krustiņš <span class="playerX"></span> uzvarēja';
            break;
        case TIE:
            announcer.innerText = 'Neizšķirts';
    }
    announcer.classList.remove('hide');
};

// Ja spēlētājs uzspied "Spēlēt atkal", tad paradāt laukums ar tukšām rūtiņām
    const resetBoard = () => {
        board = ['', '', '', '', '', '', '', '', ''];
        isGameActive = true;
        announcer.classList.add('hide');

      // Spēli vienmēr sāks Krustiņš, tāpēc, ja ir Nullītes gājiens un uzspiest reset, tad mainam spēlētāju
        if (currentPlayer === 'O') {
            changePlayer();
        }

        cells.forEach(cell => {
            cell.innerText = '';
            cell.classList.remove('playerX');
            cell.classList.remove('playerO');
        });
    }

    cells.forEach( (cell, index) => {
        cell.addEventListener('click', () => userAction(cell, index));
    });

    resetButton.addEventListener('click', resetBoard);
});