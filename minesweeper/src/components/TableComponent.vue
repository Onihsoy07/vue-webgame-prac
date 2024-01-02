<template>
    <table>
        <tr v-for="(rowData, rowIdx) in tableData" :key="rowIdx">
            <td v-for="(columnData, columnIdx) in rowData" :key="columnIdx" :style="cellDataStyle(rowIdx, columnIdx)">{{ cellDataText(columnData) }}</td>
        </tr>
    </table>
</template>

<script setup>
import { useStore } from 'vuex';
import { computed } from 'vue';
import { CODE } from '../store/index';

const store = useStore();
const tableData = computed(() => store.state.tableData);
const cellDataStyle = computed((state) => (rowIdx, columnIdx) => {
    console.log(state);
    switch(tableData.value[rowIdx][columnIdx]) {
        case CODE.NORMAL:
            return {};
        case CODE.MINE:
            return {
                background: '#444',
            };
        case CODE.OPENED:
        case CODE.CLICKED_MINE:
            return {
                background: 'white',
            };
        case CODE.FLAG:
        case CODE.FLAG_MINE:
            return {
                background: 'red',
            };
        case CODE.QUESTION:
        case CODE.QUESTION_MINE:
            return {
                background: 'yellow',
            };
        default:
            return {};        
    }
});
const cellDataText = computed((state) => (cellData) => {
    console.log(state);
    switch(cellData) {
        case CODE.NORMAL:
            return '';
        case CODE.MINE:
            return 'X';
        case CODE.FLAG:
        case CODE.FLAG_MINE:
            return '!';
        case CODE.QUESTION:
        case CODE.QUESTION_MINE:
            return '?';
        default:
            return null;
    }
});


</script>

<style scoped>

</style>