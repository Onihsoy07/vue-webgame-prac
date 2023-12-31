<template>
    <td @click="onClickTd">{{ tableDataCom[props.rowIdx][props.cellIdx] }}</td>
</template>

<script setup>
import { useStore } from 'vuex';
import { defineProps, computed } from 'vue';

const store = useStore();
const tableDataCom = computed(() => {
    return store.state.tableData;
});
const turn = computed(() => {
    return store.state.turn;
});
const turnCount = computed(() => {
    return store.state.turnCount;
});

let props = defineProps({
    rowIdx: Number,
    cellIdx: Number,

});


const onClickTd = () => {
    if(tableDataCom.value[props.rowIdx][props.cellIdx] === '') {
        store.commit('CLICK_CELL', { row : props.rowIdx, cell : props.cellIdx });
        store.commit('UP_TURNCOUNT');

        let win = false;
        const tableData = store.state.tableData;

        if(tableData[props.rowIdx][0] === turn.value && tableData[props.rowIdx][1] === turn.value && tableData[props.rowIdx][2] === turn.value) {
            win = true;
        }
        if(tableData[0][props.cellIdx] === turn.value && tableData[1][props.cellIdx] === turn.value && tableData[2][props.cellIdx] === turn.value) {
            win = true;
        }
        if(tableData[0][0] === turn.value && tableData[1][1] === turn.value && tableData[2][2] === turn.value) {
            win = true;
        }
        if(tableData[2][0] === turn.value && tableData[1][1] === turn.value && tableData[0][2] === turn.value) {
            win = true;
        }
        
        if(win) {
            console.log('win')
            store.commit('SET_RESULT', turn.value + '승리');
            store.commit('RESET_GAME');
            return win;
        }

        if(turnCount.value === 9) {
            store.commit('SET_RESULT', '무승부');
            store.commit('RESET_GAME');
            return;
        }

        store.commit('CHANGE_TURN');
    }
}

</script>

<style scoped>

</style>