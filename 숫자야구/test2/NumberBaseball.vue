<template>
    <div>
        <h1>{{ result }}</h1>
        <form @submit="onSubmitForm">
            <input type="number" v-model="value" ref="answer" maxlength="4" />
            <div>시도 : {{ leftTry }}</div>
        </form>
    </div>
</template>

<script>
    export default {
        name: 'NumberBaseball',
        data() {
            return {
                result: '',
                value: '',
                leftTry: '',

            }
        },
        methods: {
            onSubmitForm(e) {
                e.preventDefault();
                
            }
        },
    };
</script>

<style scoped>

</style>