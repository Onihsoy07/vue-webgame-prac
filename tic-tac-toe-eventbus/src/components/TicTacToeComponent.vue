<template>
    <table-component :tableData="tableData"></table-component>
</template>

<script>
import TableComponent from './TableComponent.vue';

export default{
    name: 'TicTacToe',
    data() {
        return {
            tableData: [
                ['', '', ''],
                ['', '', ''],
                ['', '', ''],
            ],
            turn: 'O',

        }
    },
    methods: {

    },
    components: {
        TableComponent,

    }
};
</script>

<style>
table {
    border-collapse: collapse;
}
td {
    border: 1px solid black;
    width: 40px;
    height: 40px;
    text-align: center;
}
</style>
