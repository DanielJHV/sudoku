const boardEl = document.querySelector<HTMLDivElement>('.board');
const digitsEl = document.querySelector<HTMLDivElement>('.digits');

let digitSelected: number;

const board: number[][] = [
  [4, 5, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 2, 0, 7, 0, 6, 3, 0],
  [0, 0, 0, 0, 0, 0, 0, 2, 8],
  [0, 0, 0, 9, 5, 0, 0, 0, 0],
  [0, 8, 6, 0, 0, 0, 2, 0, 0],
  [0, 2, 0, 6, 0, 0, 7, 5, 0],
  [0, 0, 0, 0, 0, 0, 4, 7, 6],
  [0, 7, 0, 0, 4, 5, 0, 0, 0],
  [0, 0, 8, 0, 0, 9, 0, 0, 0],
];

const solution: number[][] = [
  [4, 5, 3, 8, 2, 6, 1, 9, 7],
  [8, 9, 2, 5, 7, 1, 6, 3, 4],
  [1, 6, 7, 4, 9, 3, 5, 2, 8],
  [7, 1, 4, 9, 5, 2, 8, 6, 3],
  [5, 8, 6, 1, 3, 7, 2, 4, 9],
  [3, 2, 9, 6, 8, 4, 7, 5, 1],
  [9, 3, 5, 2, 1, 8, 4, 7, 6],
  [6, 7, 1, 3, 4, 5, 9, 8, 2],
  [2, 4, 8, 7, 6, 9, 3, 1, 5],
];

window.onload = function () {
  setGame();
};

const setGame = function () {
  // Add tiles
  for (let i: number = 0; i < 9; i++) {
    for (let j: number = 0; j < 9; j++) {
      const tile = document.createElement('div');

      if (board[i][j] !== 0) {
        tile.textContent = `${board[i][j]}`;
        tile.style.backgroundColor = '#eee';
        tile.style.pointerEvents = `none`;
      }

      tile.classList.add('tile');
      tile.id = `${i}-${j}`;
      boardEl?.appendChild(tile);
    }
  }

  // Add digits

  for (let a = 0; a < 9; a++) {
    const digit = document.createElement('div');
    digit.classList.add('digit');
    digit.textContent = `${a + 1}`;

    digit.addEventListener('click', () => {
      selectDigit(digit);
    });
    digitsEl?.appendChild(digit);
  }
};

const selectDigit = function (digit: HTMLDivElement) {
  const digits = document.querySelectorAll('.digit');
  digits.forEach(digit => {
    digit.classList.remove('digit-selected');
  });

  digit.classList.add('digit-selected');
  digitSelected = Number(digit.textContent);
  console.log(digitSelected);
};
