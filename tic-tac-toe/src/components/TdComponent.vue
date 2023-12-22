<template>
    <td @click="onClickTd">{{ cellData }}</td>
</template>

<script>
export default {
    name: 'TdComponent',
    data() {
        return {

        }
    },
    methods: {
        onClickTd() {
            if(this.cellData === '') {
                const rootData = this.$root.$data;
                rootData.tableData[this.rowIdx][this.cellIdx] = rootData.turn;

                let win = false;
                if(rootData.tableData[this.rowIdx][0] === rootData.turn && rootData.tableData[this.rowIdx][1] === rootData.turn && rootData.tableData[this.rowIdx][2] === rootData.turn) {
                    win = true;
                }
                if(rootData.tableData[0][this.cellIdx] === rootData.turn && rootData.tableData[1][this.cellIdx] === rootData.turn && rootData.tableData[2][this.cellIdx] === rootData.turn) {
                    win = true;
                }
                if(rootData.tableData[0][0] === rootData.turn && rootData.tableData[1][1] === rootData.turn && rootData.tableData[2][2] === rootData.turn) {
                    win = true;
                }
                if(rootData.tableData[2][0] === rootData.turn && rootData.tableData[1][1] === rootData.turn && rootData.tableData[0][2] === rootData.turn) {
                    win = true;
                }
                
                if(win) {
                    rootData.result = rootData.turn + '승리';
                    rootData.tableData = [['', '', ''], ['', '', ''], ['', '', '']];
                    rootData.turn = 'O';
                    return win;
                }

                rootData.turn = rootData.turn === 'O' ? 'X' : 'O';
            }
        }
    },
    props: {
        cellData: String,
        rowIdx: Number,
        cellIdx: Number,

    }
};
</script>

<style scoped>

</style>