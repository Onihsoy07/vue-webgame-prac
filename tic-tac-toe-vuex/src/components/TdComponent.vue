<template>
    <td @click="onClickTd">
        <!-- {{ tableData[this.rowIdx][this.cellIdx] }} -->
    </td>
</template>

<script>
import { useStore, mapState } from 'vuex';
// import { computed } from 'vue';

export default {
    setup() {
        const store = useStore();
        // const tableDataCom = computed(() => store.state.tableData);
        // const turn = computed(() => store.state.turn);
        // const turnCount = computed(() => store.state.turnCount);

        // const storeData = computed(() => {
        //     return mapState(['tableData', 'turn', 'turnCount']);
        // });

        // let props = defineProps({
        //     rowIdx: Number,
        //     cellIdx: Number,

        // });


        const onClickTd = () => {
            if(this.tableData[this.rowIdx][this.cellIdx] === '') {
                store.commit('CLICK_CELL', { row : this.rowIdx, cell : this.cellIdx });
                store.commit('UP_TURNCOUNT');

                // let win = false;
                // const tableData = store.state.tableData;

                // if(tableData[this.rowIdx][0] === this.turn && tableData[this.rowIdx][1] === this.turn && tableData[this.rowIdx][2] === this.turn) {
                //     win = true;
                // }
                // if(tableData[0][this.cellIdx] === this.turn && tableData[1][this.cellIdx] === this.turn && tableData[2][this.cellIdx] === this.turn) {
                //     win = true;
                // }
                // if(tableData[0][0] === this.turn && tableData[1][1] === this.turn && tableData[2][2] === this.turn) {
                //     win = true;
                // }
                // if(tableData[2][0] === this.turn && tableData[1][1] === this.turn && tableData[0][2] === this.turn) {
                //     win = true;
                // }
                
                // if(win) {
                //     store.commit('SET_RESULT', this.turn + '승리');
                //     store.commit('RESET_GAME');
                //     return win;
                // }

                // if(this.turnCount === 9) {
                //     store.commit('SET_RESULT', '무승부');
                //     store.commit('RESET_GAME');
                //     return;
                // }

                // store.commit('CHANGE_TURN');
            }
        }

        return {
            onClickTd,
        }
    },
    computed: {
        ...mapState(['tableData', 'turn', 'turnCount'])
    },
    props: {
        rowIdx: Number,
        cellIdx: Number,
    },
    created() {
        console.log(tableData);
        console.log(turn);
        console.log(turnCount);
    }
};



</script>

<style scoped>

</style>