<template>
    <div>
        <div>당첨 숫자</div>
        <div id="result-window">
            <lotto-ball v-for="(ball, idx) in lottoWinBalls" :key="idx" :number="ball"></lotto-ball>
        </div>
        <div>보너스</div>
        <lotto-ball v-if="bonusBall" :number="bonusBall">{{ bonusBall }}</lotto-ball>
        <br>
        <button type="button" v-if="redo" @click="onClickRedo()">다시 하기</button>
    </div>
</template>

<script>
import LottoBall from './LottoBall.vue';

function getLottoBalls() {
    const randomNumbers = [];
    while(randomNumbers.length < 7) {
        const inNumber = Math.ceil(Math.random() * 45);
        if(!randomNumbers.includes(inNumber)) {
            randomNumbers.push(inNumber);
        }
    }
    return randomNumbers;
}

const timeouts = [];

export default {
    name: 'LottoGenerator',
    data() {
        return {
            redo: false,
            lottoBalls: getLottoBalls(),
            lottoWinBalls: [],
            bonusBall: null,

        }
    },
    methods: {
        onClickRedo() {
            this.redo = false;
            this.lottoBalls = getLottoBalls();
            this.lottoWinBalls = [];
            this.bonusBall = null;
            this.showBalls();
        },
        showBalls() {
            for(let i = 0; i < this.lottoBalls.length - 1; i++) {
                timeouts[i] = setTimeout(() => {
                    this.lottoWinBalls.push(this.lottoBalls[i]);
                }, (i + 1) * 700);
            }
            timeouts[6] = setTimeout(() => {
                this.bonusBall = this.lottoBalls[6];
                this.redo = true;
            }, 4900);
        }
    },
    computed: {

    },
    watch: {
        
    },
    components: {
        LottoBall,

    },
    mounted() {
        this.showBalls();
    },
    unmounted() {
        timeouts.forEach((t) => {
            clearTimeout(t);
        });
    },
};
</script>

<style scoped>

</style>