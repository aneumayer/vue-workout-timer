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
    return props.workout.reduce((indexes, exerciseBlock, index) => {
        if (Array.isArray(exerciseBlock)) { // Superesets are arrays
            indexes.push(index + 1); // Add with index offest
        }
        return indexes;
    }, []); // Initial value of Array(indexes)
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
