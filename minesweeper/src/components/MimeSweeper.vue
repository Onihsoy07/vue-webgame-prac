<template>
    <div>
        <MimeForm />
        <div style="margin-top: 20px;">타이머 : {{ timer }}</div>
        <TableComponent></TableComponent>
        <div>{{ result }}</div>
    </div>
</template>

<script setup>
import MimeForm from './MimeForm.vue';
import TableComponent from './TableComponent.vue';
import { useStore } from 'vuex';
import { computed } from 'vue';

const store = useStore();
const timer = computed(() => store.state.timer);
const result = computed(() => store.state.result);


</script>

<style>
table {
    margin: 30px auto;
    border-collapse: collapse;
}
td {
    border: 1px solid black;
    width: 40px;
    height: 40px;
    text-align: center;
}
</style>
