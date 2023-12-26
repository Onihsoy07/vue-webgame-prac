<template>
    <td @click="$emit('onClickTd', 5)">{{ cellData }}</td>
</template>

<script>
export default {
    name: 'TdComponent',
    data() {
        return {

        }
    },
    methods: {

    },
    props: {
        cellData: String,
        rowIdx: Number,
        cellIdx: Number,

    },

};
</script>

<style scoped>

</style>