<script setup>
import Superset from '@/components/Superset.vue';
import Exercise from '@/components/Exercise.vue';

const props = defineProps({
    workout: {
        type: Array,
        required: true
    }
});
</script>

<template>
    <div v-if="!props.workout">
        Loading workout…
    </div>
    <div v-else>
        <div v-for="(sub, idx) in props.workout" :key="idx">
            <Superset v-if="Array.isArray(sub)" :items="sub" />
            <Exercise v-else :item="sub" />
        </div>
    </div>
</template>

<style scoped>
</style>
