import { createStore } from 'vuex';

export const START_GAME = 'START_GAME';
export const CLICK_CELL = 'CLICK_CELL';
export const CLICK_MINE = 'CLICK_MINE';
export const FLAG_CELL = 'FLAG_CELL';
export const QUESTION_CELL = 'QUESTION_CELL';
export const NOMALIZE_CELL = 'NOMALIZE_CELL';
export const INCREMENT_TIMER = 'INCREMENT_TIMER';

export const CODE = {
    NORMAL: -1,
    QUESTION: -2,
    FLAG: -3,
    QUESTION_MINE: -4,
    FLAG_MINE: -5,
    CLICKED_MINE: -6,
    MINE: -7,
    OPENED: 0,
};

const plantMine = (row, column, mine) => {
    if ((row < 5) || (column < 5)) {
        alert('가로 세로의 크기는 5이상으로 해주세요.');
        return;
    }
    if ((row * column * 0.9) < mine) {
        alert('지뢰의 수량이 너무 많습니다. ' + Math.ceil(row * column * 0.9) + '개 이하로 해주세요.');
        return;
    }
    if ((row * column * 0.05) > mine) {
        alert('지뢰의 수량이 너무 적습니다. ' + Math.ceil(row * column * 0.05) + '개 이상 해주세요.');
        return;
    }

    const data = [];
    let mineCount = 0;

    for (let i = 0; i < row; i++) {
        const rowData = [];
        for (let j = 0; j < column; j++) {
            rowData.push(CODE.NORMAL);
        }
        data.push(rowData);
    }

    while(mineCount != mine) {
        const randomRow = Math.ceil(Math.random() * row) - 1;
        const randomColumn = Math.ceil(Math.random() * column) - 1;

        if (data[randomRow][randomColumn] === -1) {
            data[randomRow][randomColumn] = CODE.MINE;
            mineCount++;
        }
    }

    return data;
};

export default createStore({
    state: {
        tableData: [],
        data: {
            row: 0,
            column: 0,
            mine: 0,
        },
        timer: 0,
        result: '',
        halted: true,

    },
    mutations: {
        [START_GAME](state, { row, column, mine }) {
            state.date = {
                row,
                column,
                mine
            };
            state.tableData = plantMine(row, column, mine);
            state.timer = 0;
            state.halted = false;
        },
        [CLICK_CELL](state, { row, column }) {
            console.log(row, column);
            switch(state.tableData[row][column]) {
                case CODE.MINE:
                    state.tableData[row][column] = CODE.CLICKED_MINE;
                    break;
                case CODE.NORMAL:
                    state.tableData[row][column] = CODE.OPENED;
                    break;
                default:
                    return;
            }
        },
        // [CLICK_MINE](state) {},
        [FLAG_CELL](state, { row, column }) {
            (state.tableData[row][column] === CODE.MINE) ? (state.tableData[row][column] = CODE.FLAG_MINE) : (state.tableData[row][column] = CODE.FLAG)
        },
        [QUESTION_CELL](state, { row, column }) {
            (state.tableData[row][column] === CODE.FLAG_MINE) ? (state.tableData[row][column] = CODE.QUESTION_MINE) : (state.tableData[row][column] = CODE.QUESTION)
        },
        // [NOMALIZE_CELL](state) {},
        [INCREMENT_TIMER](state) {
            state.timer++;
        },
    },
    getters: {

    },
     actions: {

     }
});