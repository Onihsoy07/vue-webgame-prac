<template>
    <div>
        <div v-if="currentGame === 'inner-lotto-generator'">
            
        </div>
        <div v-else-if="currentGame === 'inner-response-check'">
            
        </div>
    </div>
</template>

<script setup>
import { onMounted, computed } from 'vue';
import { useRouter, useRoute } from 'vue-router';

const router = useRouter();
const route = useRoute();

const currentGame = computed(() => {
    console.log(route.params.name);
    return route.params.name;
});

onMounted(() => {
    console.log(router);
    console.log(route);
});
</script>

<style scoped>

</style>