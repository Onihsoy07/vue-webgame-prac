<template>
    <div>
        <div style="width: 120px;">{{ store.state.turn }}님 턴입니다</div>
        <table>
            <tr-component v-for="(rowData, idx) in props.tableData" :key="idx" :row-data="rowData" :row-idx="idx"></tr-component>
        </table>
        <div style="width: 120px;">{{ store.state.result }}</div>
    </div>
</template>

<script setup>
import { useStore } from 'vuex';
import { defineProps } from 'vue';
import TrComponent from './TrComponent.vue';

const props = defineProps({
    tableData: Array,

});

const store = useStore();
</script>

<style scoped>

</style>