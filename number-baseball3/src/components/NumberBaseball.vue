<template>
    <form @submit="onSubmitForm">
        <div>남은 시도 횟수 : {{ leftTry }}</div>
        <input type="number" ref="answer" v-model="value" :disabled="gameOver" />
        <button type="submit" :disabled="gameOver">입력</button>
        <div>{{ result }}</div>
        <div v-if="gameOver">정답 : {{ correctNumber }}</div>
        <button v-if="reStartView" type="button" @click="reStart">다시 시작</button>
    </form>
</template>

<script>
    export default {
        name: 'NumberBaseball',
        data() {
            return {
                leftTry: 15,
                value: '',
                result: '',
                correctNumber: this.createRandomNumber(),
                gameOver: false,
                reStartView: false,
                
            }
        },
        methods: {
            onSubmitForm(e) {
                e.preventDefault();
                if(this.value.toString().length != '4') {
                    this.result = '숫자 4자리로 다시 입력해주세요';
                    return;
                }
                this.leftTry--;
                let strike = 0;
                let boll = 0;
                if(this.correctNumber === this.value) {
                    this.result = '정답!!!';
                    this.gameOver = true;
                    this.reStartView = true;
                } else {
                    const correctNumberToString = this.correctNumber.toString();
                    const valueToString = this.value.toString();
                    for(let i = 0; i < 4; i++) {
                        if(correctNumberToString.includes(valueToString[i])) {
                            boll++;
                        }
                        if(correctNumberToString[i] === valueToString[i]) {
                            strike++;
                            boll--;
                        }
                    }
                    this.result = 'strike : ' + strike + ', boll : ' + boll;
                }
                if(this.leftTry == 0) {
                    this.gameOver = true;
                    this.reStartView = true;
                }

            },
            createRandomNumber() {
                let numberStorage = [];
                let randomNumber = 0;
                let result = 0;

                numberStorage.push(Math.ceil(Math.random() * 9));
                for(let i = 0; numberStorage.length < 4; i++) {
                    randomNumber = Math.ceil(Math.random() * 9);
                    if(!(numberStorage.includes(randomNumber))) {
                        numberStorage.push(randomNumber);
                    }
                }

                result = (numberStorage.pop() * 1000) + (numberStorage.pop() * 100) + (numberStorage.pop() * 10) + (numberStorage.pop());

                return result;
            },
            reStart() {
                this.leftTry = 15;
                this.value = '';
                this.result = '';
                this.correctNumber = this.createRandomNumber();
                this.gameOver = false;
            }

        },
        props: {

        },
    };
</script>

<style scoped>

</style>