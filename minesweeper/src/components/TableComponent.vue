<template>
    <table>
        <tr v-for="(rowData, idx) in tableData" :key="idx">
            <td v-for="(columnData, idx) in rowData" :key="idx">{{ columnData }}</td>
        </tr>
    </table>
</template>

<script setup>
import { useStore } from 'vuex';
import { computed } from 'vue';

const store = useStore();
const tableData = computed(() => store.state.tableData);
</script>

<style scoped>

</style>