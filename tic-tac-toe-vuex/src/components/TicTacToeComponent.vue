<template>
    <table-component :tableData="store.state.tableData"></table-component>
</template>

<script setup>
import TableComponent from './TableComponent.vue';
import { useStore } from 'vuex';

const store = useStore(); 
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
