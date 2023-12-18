<template>
    <div class="ball" :style="{ background }">
        {{ number }}
    </div>
</template>

<script>
export default {
    name: 'LottoBall',
    data() {
        return {
            background: '',
            
        }
    },
    methods: {

    },
    computed: {

    },
    watch: {

    },
    props: {
        number: Number,
    }
};
</script>

<style scoped>
.ball {
    display: inline-block;
    border: 1px solid black;
    border-radius: 20px;
    width: 40px;
    height: 40px;
    line-height: 40px;
    font-size: 20px;
    text-align: center;
    margin: 10px 10px;
}
</style>
