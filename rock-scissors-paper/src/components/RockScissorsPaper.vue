<template>
    <div>
        <div id="computer" :style="{ computedStyleObject, width: '150px', height: '200px', margin: '0 auto' }" :class="{}"></div>
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
            imageStartXAxis: '0px',
            rspStartXAxis: {
                rock: '0',
                scissors: '-135px',
                paper: '-284px',
            },

        }
    },
    computed: {
        computedStyleObject() {
            return {
                background: `url(https://en.pimg.jp/023/182/267/1/23182267.jpg) ${this.imageStartXAxis} 0`
            };
        },

    },
    methods: {
        onClickButton(choice) {
            return choice;
        }
    },
    mounted() {
        console.log(this.rspStartXAxis.보);
        console.log(this.imageStartXAxis);

    }

};
</script>

<style scoped>

</style>