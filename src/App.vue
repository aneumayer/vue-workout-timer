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

<style scoped>
.container {
    place-items: center;
}
</style>
