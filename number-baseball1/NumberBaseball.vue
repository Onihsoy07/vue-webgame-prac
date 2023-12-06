<template>
    <div>
        <form @submit="onSubmitForm">
            <div>{{ result }}</div>
            <input type="number" v-model="value" ref="answer" maxlength="4" />
            <button type="submit">입력</button>
            <div>{{ leftTry }}</div>
        </form>
    </div>
</template>

<script>
    export default {
        name: 'NumberBaseball',
        data() {
            return {
                value: '',
                result: '',
                leftTry: '',

            }
        },
        methods: {
            onSubmitForm(e) {
                e.preventDefault();
            }
        },
        props: {

        }
    };
</script>

<style scoped>

</style>