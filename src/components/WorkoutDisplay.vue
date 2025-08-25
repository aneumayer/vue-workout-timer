<script setup>
import { computed } from 'vue';
import { useWorkoutStore } from '@/stores/workout';
import TheSuperset from '@/components/TheSuperset.vue';
import TheExercise from '@/components/TheExercise.vue';

const workoutStore = useWorkoutStore();

// Use the selected workout data directly from the store
const workout = computed(() => workoutStore.selectedWorkoutData);

// Build an array of superset indices ahead of time
const supersetIndices = computed(() => {
    return workout.value?.reduce((indexes, exerciseBlock, index) => {
        if (Array.isArray(exerciseBlock)) {
            indexes.push(index + 1); // Offset index for display
        }
        return indexes;
    }, []) || [];
});
</script>


<template>
    <div v-if="workout">
        <template v-for="(exerciseBlock, idx) in workout" :key="idx">
            <TheSuperset v-if="Array.isArray(exerciseBlock)" :exercises="exerciseBlock"
                :supersetCount="supersetIndices[idx]" />
            <TheExercise v-else :exercise="exerciseBlock" />
        </template>
    </div>
</template>
