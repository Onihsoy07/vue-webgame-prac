<template>
    <td @click="onClickTd">{{ cellData }}</td>
</template>

<script setup>
import { useStore } from 'vuex';
import { defineProps } from 'vue';

const props = defineProps({
    cellData: String,
    rowIdx: Number,
    cellIdx: Number,

})

const store = useStore();
const onClickTd = () => {
    store.commit('CLICK_CELL', props.rowIdx, props.cellIdx);
}

</script>

<style scoped>

</style>