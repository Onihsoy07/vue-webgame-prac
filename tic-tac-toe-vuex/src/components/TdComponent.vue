<template>
    <td @click="onClickTd">{{ store.state.tableData[props.rowIdx][props.cellIdx] }}</td>
</template>

<script setup>
import { useStore } from 'vuex';
import { defineProps } from 'vue';

const store = useStore();

const props = defineProps({
    rowIdx: Number,
    cellIdx: Number,

});


const onClickTd = () => {
    const tableData = store.state.tableData;
    if(tableData[props.rowIdx][props.cellIdx] === '') {
        const turn = store.state.turn;
        const turnCount = store.state.turnCount;

        store.commit('CLICK_CELL', { row : props.rowIdx, cell : props.cellIdx });
        store.commit('CHANGE_TURN');
        store.commit('UP_TURNCOUNT');

        let win = false;

        if(tableData[props.rowIdx][0] === turn && tableData[props.rowIdx][1] === turn && tableData[props.rowIdx][2] === turn) {
            win = true;
        }
        if(tableData[0][props.cellIdx] === turn && tableData[1][props.cellIdx] === turn && tableData[2][props.cellIdx] === turn) {
            win = true;
        }
        if(tableData[0][0] === turn && tableData[1][1] === turn && tableData[2][2] === turn) {
            win = true;
        }
        if(tableData[2][0] === turn && tableData[1][1] === turn && tableData[0][2] === turn) {
            win = true;
        }
        
        if(win) {
            store.commit('SET_RESULT', turn + '승리');
            store.commit('RESET_GAME');
            return win;
        }
        console.log(turnCount);
        if(turnCount === 8) {
            store.commit('SET_RESULT', '무승부');
            store.commit('RESET_GAME');
            return;
        }
    }
}

</script>

<style scoped>

</style>