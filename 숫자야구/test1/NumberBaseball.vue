<template>
    <form @submit="onSubmitForm">
        <h1>{{ result }}</h1>
        <input type="number" maxlength="4" v-model="value" ref="answer" />
        <button type="submit">입력</button>
        <div>시도 {{ leftTryNumber }}</div>
    </form>
</template>

<script>
    export default {
        data() {

        },
        methods: {

        }
    };
</script>

<style>

</style>