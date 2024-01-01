import { createStore } from 'vuex';

export const START_GAME = 'START_GAME';
export const RESERT_GAME = 'RESTART_GAME';
export const CLICK_CELL = 'CLICK_CELL';
export const CLICK_MINE = 'CLICK_MINE';
export const FLAG_CELL = 'FLAG_CELL';
export const QUESTION_CELL = 'QUESTION_CELL';
export const NOMALIZE_CELL = 'NOMALIZE_CELL';
export const INCREMENT_TIMER = 'INCREMENT_TIMER';

export default createStore({
    state: {
        tableData: [],
        data: {
            row: 0,
            cell: 0,
            mine: 0,
        },
        timer: 0,
        result: '',

    },
    mutations: {
        [START_GAME](state) {},
        [RESERT_GAME](state) {},
        [CLICK_CELL](state) {},
        [CLICK_MINE](state) {},
        [FLAG_CELL](state) {},
        [QUESTION_CELL](state) {},
        [NOMALIZE_CELL](state) {},
        [INCREMENT_TIMER](state) {},
    },
    getters: {

    },
     actions: {

     }
});