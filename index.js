class Sudoku {
    constructor(data) {
        this.sudoku = data;
        this.correctData = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    }

    IsValid() {
        for (let row = 0; row < 9; row++) {
            if (!this.IsValidSet(this.sudoku[row])) {
                return false;
            }
        }
        
        for (let col = 0; col < 9; col++) {
            let column = [];
            
            for (let row = 0; row < 9; row++) {
                column.push(this.sudoku[row][col]);
            }
            
            if (!this.IsValidSet(column)) {
                return false;
            }
        }
        
        for (let boxRow = 0; boxRow < 3; boxRow++) {
            for (let boxCol = 0; boxCol < 3; boxCol++) {
                let box = [];
                
                for (let row = 0; row < 3; row++) {
                    for (let col = 0; col < 3; col++) {
                        box.push(this.sudoku[boxRow * 3 + row][boxCol * 3 + col]);
                    }
                }
                
                if (!this.IsValidSet(box)) {
                    return false;
                }
            }
        }

        return true;
    }

    IsValidSet(arr) {
        let sortedArr = [...arr].sort((a, b) => a - b);
        return JSON.stringify(sortedArr) === JSON.stringify(this.correctData);
    }
}

const correctSudoku = [
    [5, 3, 4, 6, 7, 8, 9, 1, 2],
    [6, 7, 2, 1, 9, 5, 3, 4, 8],
    [1, 9, 8, 3, 4, 2, 5, 6, 7],
    [8, 5, 9, 7, 6, 1, 4, 2, 3],
    [4, 2, 6, 8, 5, 3, 7, 9, 1],
    [7, 1, 3, 9, 2, 4, 8, 5, 6],
    [9, 6, 1, 5, 3, 7, 2, 8, 4],
    [2, 8, 7, 4, 1, 9, 6, 3, 5],
    [3, 4, 5, 2, 8, 6, 1, 7, 9]
];

const incorrectSudoku = [
    [5, 3, 4, 6, 7, 8, 9, 1, 2],
    [6, 7, 2, 1, 9, 0, 3, 4, 8],
    [1, 0, 0, 3, 4, 2, 5, 6, 0],
    [8, 5, 9, 7, 6, 1, 0, 2, 0],
    [4, 2, 6, 8, 5, 3, 7, 9, 1],
    [7, 1, 3, 9, 2, 4, 8, 5, 6],
    [9, 0, 1, 5, 3, 7, 2, 1, 4],
    [2, 8, 7, 4, 1, 9, 6, 3, 5],
    [3, 0, 0, 4, 8, 1, 1, 7, 9]
];

let f_sudoku = new Sudoku(correctSudoku);
let s_sudoku = new Sudoku(incorrectSudoku);

let ya = 1.15 
let pa = 2.30;

console.log(ya + pa);

console.log(`\nValid of the 1-st sudoku: ${f_sudoku.IsValid()}`);
console.log(`Valid of the 2-st sudoku: ${s_sudoku.IsValid()}`);
