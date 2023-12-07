<template>
    <form @submit="onSubmitForm">
        <div>남은 시도 횟수 : {{ leftTry }}</div>
        <input type="number" ref="answer" v-model="value" />
        <button type="submit">입력</button>
        <div>{{ result }}</div>
        <!-- <div v-if="gameOver">정답 : {{ correctNumber }}</div> -->
        <!-- <button v-if="reStartView" type="button" @click="reStart">다시 시작</button> -->
    </form>
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
    };
</script>

<style scoped>

</style>
