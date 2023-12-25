<template>
    <td @click="$emit('onClickTd')">{{ cellData }}</td>
</template>

<script>
export default {
    name: 'TdComponent',
    data() {
        return {

        }
    },
    methods: {
        // onClickTd() {
        //     this.emit.emit('onClickTd', this.cellData);
        // }
    },
    props: {
        cellData: String,
        rowIdx: Number,
        cellIdx: Number,

    },
    emits: [
        "onClickTd",
        
    ],

};
</script>

<style scoped>

</style>