<script setup>
import { ref, onMounted } from 'vue';
import Superset from '@/components/Superset.vue';
import Exercise from '@/components/Exercise.vue';

const workout = ref(null);

onMounted(async () => {
    const module = await import('@/assets/workout.json');
    workout.value = module.default;
})
</script>

<template>
    <div v-if="!workout">
        Loading workout…
    </div>
    <div v-else>
        <div v-for="(sub, idx) in workout" :key="idx">
            <Superset v-if="Array.isArray(sub)" :items="sub" />
            <Exercise v-else :item="sub" />
        </div>
    </div>
</template>

<style scoped>
</style>
