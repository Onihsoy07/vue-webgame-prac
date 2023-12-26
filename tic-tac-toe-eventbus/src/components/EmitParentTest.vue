<template>
    <EmitTestVue @emit-post-test="$emit('emitPostTest')"></EmitTestVue>
</template>

<script>
import EmitTestVue from './EmitTest.vue';

export default {
    name: 'EmitParentTest',
    data() {
        return {

        }
    },
    methods: {

    },
    components: {
        EmitTestVue,
    },

};
</script>

<style scoped>

</style>