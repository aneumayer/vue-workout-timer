<script setup>
import { computed } from 'vue';
import TheSuperset from '@/components/TheSuperset.vue';
import TheExercise from '@/components/TheExercise.vue';

const props = defineProps({
    workout: {
        type: Array,
        required: true
    }
});

// Build an array of superset indices ahead of time:
const supersetIndices = computed(() => {
    let count = 0;
    return props.workout.map(exerciseBlock => {
        if (Array.isArray(exerciseBlock)) {
            return ++count;
        }
        return null;
    });
});
</script>

<template>
    <div v-if="props.workout">
        <template v-for="(exerciseBlock, idx) in props.workout" :key="idx">
            <TheSuperset v-if="Array.isArray(exerciseBlock)" :exercises="exerciseBlock" :supersetCount="supersetIndices[idx]" />
            <TheExercise v-else :exercise="exerciseBlock" />
        </template>
    </div>
</template>
