<template>
    <div>
        <div v-if="currentGame === 'inner-lotto-generator'">
            <LottoGenerator></LottoGenerator>
        </div>
        <div v-else-if="currentGame === 'inner-response-check'">
            <ResponseCheckVue></ResponseCheckVue>
        </div>
    </div>
</template>

<script setup>
import { onMounted, computed } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import LottoGenerator from './lotto-generator/LottoGenerator.vue';
import ResponseCheckVue from './response-check/ResponseCheck.vue';

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