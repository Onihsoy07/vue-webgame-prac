<template>
    <form @submit.prevent="onSubmitForm">
        <input type="text" minlength="4" maxlength="4" v-model="value" ref="answer" />
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
            tries: [],
            initNumbers: this.getRandomNumbers(),

        }
    },
    methods: {
        onSubmitForm() {
            if(this.value == this.initNumbers.join('')) {
                    this.tries.push({
                    try: this.value,
                    result: '정답'
                });
                alert('다시 시작합니다');
                this.value = '';
                this.tries= [];
                this.$refs.answer.focus();
                this.initNumbers = this.getRandomNumbers();
            } else {
                let strike = 0;
                let ball = 0;
                for(let i = 0; i < 4; i++) {
                    if(this.value[i] == this.initNumbers[i]) {
                        strike++;
                    } else if(this.initNumbers.includes(parseInt(this.value[i]))) {
                        ball++;
                    }
                }
                this.tries.push({
                    try: this.value,
                    result: `${strike} 스트라이크, ${ball} 볼`
                });
                this.value = '';
                this.$refs.answer.focus();
            }
            if(this.tries.length >= 10) {
                alert(`실패하였습니다. 정답은 ${this.initNumbers.join('')}입니다.`);
                this.value = '';
                this.tries= [];
                this.$refs.answer.focus();
                this.initNumbers = this.getRandomNumbers();
                return;
            }


        },
        getRandomNumbers() {
            const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
            const array = [];
            for(let i = 0; i < 4; i++) {
                const choiceNumber = numbers.splice(Math.floor(Math.random() * (9 - i)), 1)[0];
                array.push(choiceNumber);
            }
            return array;
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
    max-width: 150px;
    margin: 0 auto;
}

</style>
