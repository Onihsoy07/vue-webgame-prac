<template>
    <div>
        <div id="screen" :class="state" @click="onClickScreen">{{ message }}</div>
        <template v-if="true">
            <div>반응속도시간 : {{ result.slice(-1)[0] || 0 }} ms</div>
            <div>평군시간 : 
                <span v-if="result.length!=0">{{ average }}</span>
                <span v-else>0</span>
                 ms
            </div>
            <button @click="onReset">리셋</button>
        </template>
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
        computed: {
            average() {
                return (this.result.reduce((a, c) => a + c, 0) / this.result.length).toFixed(1);
            }
        },
        methods: {
            onReset() {
                this.result = [];
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
                    clearTimeout(this.timeout);
                    this.state = 'now';
                    this.message = '너무 빠르게 눌렀습니다.';
                } else if(this.state === 'now') {
                    this.endTime = new Date();
                    if(this.message === '누르세요!') {
                        this.result.push(this.endTime - this.startTime);
                    }
                    this.state = 'waiting';
                    this.message = '클릭해서 시작하세요.';
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