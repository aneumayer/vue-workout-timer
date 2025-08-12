<script setup>
import SessionTimer from '@/components/SessionTimer.vue';
import WorkoutPicker from '@/components/WorkoutPicker.vue';
</script>

<template>
    <div class="container">
        <h1>Workout Timer</h1>
        <SessionTimer />
        <WorkoutPicker />
    </div>
</template>

<style>
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
}
</style>
