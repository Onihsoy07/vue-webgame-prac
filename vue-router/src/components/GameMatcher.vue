<template>
    <div>
        <div v-if="currentGame === 'inner-lotto-generator'">
            
        </div>
        <div v-else-if="currentGame === 'inner-response-check'">
            
        </div>
    </div>
</template>

<script>
export default {
    mounted() {
        console.log(this.$router);
        console.log(this.$route);
    },
    computed: {
        currentGame() {
            return this.$route.params.name;
        }
    }
};

// import { onMounted } from 'vue';

// onMounted(() => {
//     console.log(this.$router);
//     console.log(this.$router);
// });
</script>

<style scoped>

</style>