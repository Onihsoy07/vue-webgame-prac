<template>
    <div>
        <div style="width: 120px;">{{ turn }}님 턴입니다</div>
        <table>
            <tr-component v-for="(rowData, idx) in tableData" :key="idx" :row-data="rowData" :row-idx="idx"></tr-component>
        </table>
        <div style="width: 120px;">{{ result }}</div>
    </div>
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
        turn: String,

    },
};
</script>

<style scoped>

</style>