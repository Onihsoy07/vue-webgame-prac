<template>
    <td @click="onClickTd">{{ cellData }}</td>
</template>

<script>
import { CLICK_CELL } from '../store.js';

export default {
    name: 'TdComponent',
    data() {
        return {

        }
    },
    methods: {
        onClickTd() {
            this.$store.commit(CLICK_CELL);
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