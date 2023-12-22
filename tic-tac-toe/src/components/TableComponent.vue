<template>
    <table>
        <tr-component v-for="(rowData, idx) in tableData" :key="idx" :row-data="rowData" :row-idx="idx"></tr-component>
        <div>{{ result }}</div>
    </table>
</template>

<script>
import TrComponent from './TrComponent.vue';

export default {
    name: 'TableComponent',
    data() {
        return {

        }
    },
    methods: {

    },
    components: {
        TrComponent,

    },
    props: {
        tableData: Array,
        result: String,

    },
};
</script>

<style scoped>

</style>