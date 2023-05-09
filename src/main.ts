const boardEl = document.querySelector<HTMLDivElement>('.board');

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

const setGame = function () {
  for (let i: number = 0; i < 9; i++) {
    for (let j: number = 0; j < 9; j++) {
      const tyle = document.createElement('div');
      tyle.classList.add('tile');
      if (board[i][j] !== 0) tyle.textContent = `${board[i][j]}`;
      boardEl?.appendChild(tyle);
    }
  }
};

setGame();
