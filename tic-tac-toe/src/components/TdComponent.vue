<template>
    <td @click="onClickTd">{{ cellData }}</td>
</template>

<script>
export default {
    name: 'TdComponent',
    data() {
        return {

        }
    },
    methods: {
        onClickTd() {
            console.log(this.$root.$data);
            this.$root.$data.turn = this.$root.$data.turn === 'O' ? 'X' : 'O';
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