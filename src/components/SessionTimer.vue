<script setup>
import { ref, watch, onUnmounted } from 'vue';

// Set the intervale for the timer
let elapsed = ref(0);
let intervalId = null;
const startTimer = () => {
    if (!intervalId) {
        intervalId = setInterval(() => { elapsed.value++; }, 1000);
    }
};

// Clear the intervale to pause the timer
const stopTimer = () => {
    if (intervalId) {
        clearInterval(intervalId);
        intervalId = null;
    }
};

// Whenever the elapsed time changes format the sessionTime
let sessionTime = ref('00:00');
watch(() => elapsed.value, () => {
    const m = String(Math.floor(elapsed.value / 60)).padStart(2, '0');
    const s = String(elapsed.value % 60).padStart(2, '0');
    sessionTime.value = `${m}:${s}`;
});

// Pause and resume the timer
let running = ref(false);
const toggleTimer = () => {
    running.value = !running.value;
    if (running.value) {
        startTimer();
    } else {
        stopTimer();
    }
};

// Clear the timer intervale when no longer needed
onUnmounted(() => {
    stopTimer();
});
</script>

<template>
    <div class="timer card center-block">
        <div class="display d-flex justify-content-center">{{ sessionTime }}</div>
        <div class="controls d-flex justify-content-center">
            <button class="control-button" @click="toggleTimer">{{ running ? 'Stop' : 'Start' }}</button>
        </div>
    </div>
</template>

<style scoped>
.timer {
    width: 30rem;
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 0.5rem;
    margin-bottom: 0.5rem;
    background-color: #2b0000;
}
.display {
    font-size: 3rem;
}
</style>