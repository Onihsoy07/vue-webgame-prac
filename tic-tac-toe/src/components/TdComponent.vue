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