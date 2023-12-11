<template>
    <div>
        <div id="screen" :class="state" @click="onClickScreen">{{ message }}</div>
        <div>
            <div>반응속도시간 : {{ result.slice(-1)[0] }}</div>
            <button @click="onReset">리셋</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'ResponseCheck',
        data() {
            return {
                message: '클릭해서 시작하세요.',
                responseTime: '',
                state: 'waiting',
                startTime: 0,
                endTime: 0,
                timeout: null,
                result: [],

            }
        },
        methods: {
            onReset() {

            },
            onClickScreen() {
                if(this.state === 'waiting') {
                    this.state = 'ready';
                    this.message = '녹색으로 바뀌면 클릭하세요.';
                    this.timeout = setTimeout(() => {
                        this.state = 'now';
                        this.message = '누르세요!';
                        this.startTime = new Date();
                    }, Math.floor(Math.random() * 1000) + 2000);
                } else if(this.state === 'ready') {
                    this.state = 'now';
                    this.message = '너무 빠르게 눌렀습니다.';
                } else if(this.state === 'now') {
                    this.endTime = new Date();
                    this.state = 'waiting';
                    this.message = '클릭해서 시작하세요.';
                    this.result.push(this.endTime - this.startTime);
                }
            }

        },
    };
</script>

<style scoped>
    #screen {
        margin: 0 auto;
        width: 300px;
        height: 200px;
        text-align: center;
        user-select: none;
    }
    #screen.waiting {
        background-color: aqua;
    }
    #screen.ready {
        background-color: red;
        color: white;
    }
    #screen.now {
        background-color: greenyellow;
    }
</style>