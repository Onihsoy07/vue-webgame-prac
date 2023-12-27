import Vuex from 'vuex';

export const SET_TURN = 'SET_TURN';
export const SET_RESULT = 'SET_RESULT';
export const CLICK_CELL = 'CLICK_CELL';
export const CHANGE_TURN = 'CHANGE_TURN';
export const RESET_GAME = 'RESET_GAME';


export default new Vuex.Store({
    state: {
        tableData: [
            ['', '', ''],
            ['', '', ''],
            ['', '', ''],
          ],
          turn: 'O',
          turnCount: 0,
          result: '',
    }, // data
    mutations: {
        [SET_TURN](state, turn) {
            state.turn = turn;
        },
        [SET_RESULT](state, result) {
            state.result = result;
        },
        [CLICK_CELL](state, { row, cell }) {
            state.tableData[row][cell] = state.turn;
        },
        [CHANGE_TURN](state) {
            state.turn = state.turn === 'O' ? 'X' : 'O';
        },
        [RESET_GAME](state) {
            state.turn = 'O';
            state.tableData = [
                ['', '', ''],
                ['', '', ''],
                ['', '', '']
            ];
        },
    }, // state 동기적으로 수정
    getters: {

    }, // computed
    actions: {

    }, // 비동기 또는 여러개의 mutations 실행
});