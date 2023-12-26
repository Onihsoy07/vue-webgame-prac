<template>
    <div>
        <button @click="$emit('emitPostTest', 'helloChild')">버튼</button>
    </div>
</template>

<script>
export default {
    name: 'EmitTest',
    data() {
        return {

        }
    },
    methods: {

    }
};
</script>

<style scoped>

</style>