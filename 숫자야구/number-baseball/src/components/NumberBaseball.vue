<template>
    <form @submit.prevent="onSubmitForm">
        <input type="number" minlength="4" maxlength="4" v-model="value" ref="answer" />
        <button>입력</button>
        <div>시도 : {{ tries.length }}</div>
        <ul>
            <li v-for="(t, idx) in tries" :key="idx">
                <div>{{ t.try }}</div>
                <div>{{ t.result }}</div>
            </li>
        </ul>
    </form>
</template>

<script>
export default {
    name: 'NumberBaseball',
    data() {
        return {
            value: '',
            result: '',
            tries: [],

        }
    },
    methods: {
        onSubmitForm() {
            this.tries.push({
                try: this.value,
                result: 'result'
            });
            this.value = '';
            this.$refs.answer.focus();
        },

    },  
}
</script>

<style scoped>
form {
    max-width: 300px;
    margin: 0 auto;
}
ul {
    max-width: 100px;
    margin: 0 auto;
}

</style>
