<template>
    <table>
        <tr
            v-for="(rowData, rowIdx) in tableData"
            :key="rowIdx"
        >
            <td
                v-for="(columnData, columnIdx) in rowData" 
                :key="columnIdx" 
                :style="cellDataStyle(rowIdx, columnIdx)" 
                @click="onClickTd(rowIdx, columnIdx)"
                @contextmenu.prevent="onRightClickTd(rowIdx, columnIdx, columnData)"
            >
                {{ cellDataText(columnData) }}
            </td>
        </tr>
    </table>
</template>

<script setup>
import { useStore } from 'vuex';
import { computed } from 'vue';
import { CODE } from '../store/index';

const store = useStore();
const tableData = computed(() => store.state.tableData);
const halted = computed(() => store.state.halted);

const cellDataStyle = computed(() => (rowIdx, columnIdx) => {
    switch(tableData.value[rowIdx][columnIdx]) {
        case CODE.NORMAL:
            return {
                background: 'gray',
            };
        case CODE.MINE:
            return {
                background: 'gray',
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
const cellDataText = computed(() => (cellData) => {
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
        case CODE.CLICKED_MINE:
            return '펑!';
        default:
            return null;
    }
});

function onClickTd(row, column) {
    if (halted.value) {
        return null;
    }
    store.commit('CLICK_CELL', { row, column })
}
function onRightClickTd(row, column, cellData) {
    if (halted.value) {
        return null;
    }

    switch(cellData) {
        case CODE.NORMAL:
        case CODE.MINE:
            store.commit('FLAG_CELL', { row, column });
            break;
        case CODE.FLAG:
        case CODE.FLAG_MINE:
            store.commit('QUESTION_CELL', { row, column });
            break;
        case CODE.QUESTION:
            store.state.tableData[row][column] = CODE.NORMAL;
            break;
        case CODE.QUESTION_MINE:
            store.state.tableData[row][column] = CODE.MINE;
            break;
        default:
            return;

    }
}

</script>

<style scoped>
td {
    color: black;
}
</style>