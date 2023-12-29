<template>
    <tr>
        <td-component v-for="(cellData, idx) in props.rowData" :key="idx" :row-idx="props.rowIdx" :cell-idx="idx"></td-component>
    </tr>
</template>

<script setup>
import TdComponent from './TdComponent.vue';
import { defineProps } from 'vue';

const props = defineProps({
    rowData: Array,
    rowIdx: Number,
});
</script>

<style scoped>

</style>