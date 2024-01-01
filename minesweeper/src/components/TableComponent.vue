<template>
    <div>
        <input type="number" placeholder="세로" :value="row" @change="onChangeRow">
        <input type="number" placeholder="가로" :value="column" @change="onChangeColumn">
        <input type="number" placeholder="가로" :value="mine" @change="onChangeMine">
        <button type="button" @click="onClickBtn">시작</button>
    </div>
</template>

<script setup>
import { useStore } from 'vuex';

const store = useStore();
let row = 0;
let column = 0;
let mine = 0;

function onChangeRow(e) {
    row = e.target.value;
}
function onChangeColumn(e) {
    column = e.target.value;
}
function onChangeMine(e) {
    mine = e.target.value;
}
function onClickBtn() {
    store.commit('START_GAME', row, column, mine);
}

</script>

<style scoped>

</style>
