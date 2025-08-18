<script setup>
import { ref } from 'vue';
import SessionTimer from '@/components/SessionTimer.vue';
import WorkoutPicker from '@/components/WorkoutPicker.vue';
import WorkoutDisplay from '@/components/WorkoutDisplay.vue';

// Get the selected workout to pass down
const workoutChoice = ref(null);
function handleSelection(workout) {
    workoutChoice.value = workout;
}
</script>

<template>
    <div class="container">
        <h1>Workout Timer</h1>
        <WorkoutPicker @selectedWorkout="handleSelection" />
        <SessionTimer />
        <WorkoutDisplay v-if="workoutChoice" :workout="workoutChoice" />
    </div>
</template>

<style>
a[href="#"] {
    color: white;
}

.container {
    width: 800px;
    place-items: center;
}

.control-button {
    margin: 0.5em;
    border-radius: 8px;
    background-color: #222529;
    font: white;
    width: 8rem;
    border: 1px solid #ddd;
}
</style>
