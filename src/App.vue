<script setup>
import SessionTimer from '@/components/SessionTimer.vue';
import Workout from '@/components/Workout.vue';
</script>

<template>
    <div class="container">
        <h1>Workout Timer</h1>
        <SessionTimer />
        <Workout />
    </div>
</template>

<style scoped>
.container {
    place-items: center;
}
</style>
