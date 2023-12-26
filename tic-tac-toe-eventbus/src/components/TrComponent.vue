<template>
    <tr>
        <td-component v-for="(cellData, idx) in rowData" :key="idx" :cell-data="cellData" :row-idx="rowIdx" :cell-idx="idx" @on-click-td="$emit('onClickTd')"></td-component>
    </tr>
</template>

<script>
import TdComponent from './TdComponent.vue';

export default {
    name: 'TrComponent',
    data() {
        return {

        }
    },
    methods: {
        
    },
    components: {
        TdComponent,

    },
    props: {
        rowData: Array,
        rowIdx: Number,

    }
};
</script>

<style scoped>

</style>