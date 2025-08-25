<script setup>
import { ref } from 'vue';
import SessionTimer from '@/components/SessionTimer.vue';
import WorkoutPicker from '@/components/WorkoutPicker.vue';
import WorkoutDisplay from '@/components/WorkoutDisplay.vue';
</script>

<template>
    <div class="container">
        <h1>Workout Timer</h1>
        <WorkoutPicker />
        <SessionTimer />
        <WorkoutDisplay />
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

.picker,
.timer,
.superset,
.exercise {
    border: 1px solid #ddd;
    border-radius: 10px;
    padding: 0.5rem 1rem;
    margin-bottom: 0.6rem;
}
</style>
