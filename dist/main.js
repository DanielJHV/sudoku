"use strict";
const errorsEl = document.querySelector('.errors');
const boardEl = document.querySelector('.board');
const digitsEl = document.querySelector('.digits');
let digitSelected;
let errors = 0;
const board = [
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
const solution = [
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
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            const tile = document.createElement('div');
            if (board[i][j] !== 0) {
                tile.textContent = `${board[i][j]}`;
                tile.style.backgroundColor = '#eee';
                tile.style.pointerEvents = `none`;
            }
            if (i === 2 || i === 5)
                tile.style.borderBottom = '2px solid #000';
            if (i === 8)
                tile.style.borderBottom = 'none';
            if (j === 2 || j === 5)
                tile.style.borderRight = '2px solid #000';
            if (j === 8)
                tile.style.borderRight = 'none';
            tile.classList.add('tile');
            tile.id = `${i}-${j}`;
            tile.addEventListener('click', () => {
                selectTile(tile);
            });
            boardEl === null || boardEl === void 0 ? void 0 : boardEl.appendChild(tile);
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
        digitsEl === null || digitsEl === void 0 ? void 0 : digitsEl.appendChild(digit);
    }
};
const selectDigit = function (digit) {
    const digits = document.querySelectorAll('.digit');
    digits.forEach(digit => {
        digit.classList.remove('digit-selected');
    });
    digit.classList.add('digit-selected');
    digitSelected = Number(digit.textContent);
    console.log(digitSelected);
};
const selectTile = function (tile) {
    if (digitSelected) {
        tile.textContent = `${digitSelected}`;
        checkBoard(tile);
    }
};
const checkBoard = function (tile) {
    const coords = tile.id;
    const row = Number(coords.charAt(0));
    const col = Number(coords.charAt(2));
    if (solution[row][col] === Number(tile.textContent)) {
        tile.style.color = '#06f';
        tile.style.pointerEvents = 'none';
    }
    else {
        tile.style.color = '#ab0f0f';
        if (errorsEl === null)
            return;
        errors++;
        errorsEl.textContent = `Errors: ${errors}`;
    }
};
