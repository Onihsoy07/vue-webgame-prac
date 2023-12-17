<template>
    <div>
        <div>당첨 숫자</div>
        <div id="result-window">
            <lotto-ball v-for="(ball, idx) in lottoBalls" :key="idx" :number="ball"></lotto-ball>
        </div>
        <div>보너스</div>
        <lotto-ball v-if="bonusBall"></lotto-ball>
        <button v-if="redo">다시 하기</button>
    </div>
</template>

<script>
import LottoBall from './LottoBall.vue';

function getLottoBalls() {
    return null;
}

export default {
    name: 'LottoGenerator',
    data() {
        return {
            redo: false,
            lottoBalls: getLottoBalls(),
            bonusBall: null,

        }
    },
    methods: {

    },
    computed: {

    },
    watch: {
        
    },
    components: {
        LottoBall,

    }
};
</script>

<style scoped>

</style>