<template>
    <div>
        <mime-form />
        <div>{{ timer }}</div>
        <table-component></table-component>
        <div>{{ result }}</div>
    </div>
</template>

<script setup>
import { useStore } from 'vuex';

const store = useStore();
const timer = store.state.timer;
const result = store.state.result;


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
