<template>
    <div>
        <div id="computer" :style="computedStyleObject" :class="{}"></div>
        <div>
            <button @click="onClickButton('바위')">바위</button>
            <button @click="onClickButton('가위')">가위</button>
            <button @click="onClickButton('보')">보</button>
        </div>
        <div>{{ result }}</div>
        <div>점수 : {{ score }}점</div>
    </div>
</template>

<script>
export default {
    name: 'RockScissorsPaper',
    data() {
        return {
            result: '',
            score: '',
            rspStartXAxis: {
                rock: '0px',
                scissors: '-135px',
                paper: '-284px',
            },
            ccol: {
                red: 'red'
            },
            imageStartXAxis: '',
            interval: null,
            scoreConver: {
                'rock': 0,
                'scissors': 1,
                'paper': -1,
            }

        }
    },
    computed: {
        computedStyleObject() {
            return {
                background: `url(https://en.pimg.jp/023/182/267/1/23182267.jpg) ${this.imageStartXAxis} 0`,
                width: '150px', height: '200px', margin: '0 auto'
            };
        },

    },
    methods: {
        onClickButton(choice) {
            clearInterval(this.interval);
            const aaa = this.computerChoice(this.imageStartXAxis);
            console.log(aaa);
            // const computerScore = this.scoreConver[this.computerChoice(this.imageStartXAxis)];
            // const myScore = this.scoreConver[choice];
            // const diff = myScore - computerScore;
            // console.log(myScore);
            // console.log(computerScore);
            // console.log(diff);
            // if(diff === 0) {
            //     this.result = '비겼습니다.';
            // } else if([-1, 2].includes(diff)) {
            //     this.result = '이겼습니다.';
            //     this.score += 1;
            // } else {
            //     this.result = '졌습니다.';
            //     this.score -= 1;
            // }
            return choice;
        },
        computerChoice(computerRSPAxis) {
            Object.entries(this.rspStartXAxis).find(function(v) {
                if(v[1] === computerRSPAxis) {
                    console.log(v[0]);
                    return v[0];
                }
            });
            // return null;
        },
    },
    created() {
        console.log('created');
    },
    mounted() {
        this.imageStartXAxis = this.rspStartXAxis.rock;
        console.log('mounted');
        this.interval = setInterval(() => {
            if(this.imageStartXAxis === this.rspStartXAxis.rock) {
                this.imageStartXAxis = this.rspStartXAxis.scissors;
            } else if(this.imageStartXAxis === this.rspStartXAxis.scissors) {
                this.imageStartXAxis = this.rspStartXAxis.paper;
            } else if(this.imageStartXAxis === this.rspStartXAxis.paper) {
                this.imageStartXAxis = this.rspStartXAxis.rock;
            }
        }, 70);
    },
    updated() {
        // console.log('updated');
    },
    beforeUnmount() {
        console.log('beforeUnmount');
        clearInterval(this.interval);
    },

};
</script>

<style scoped>

</style>