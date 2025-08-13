<script setup>
import { ref, onUnmounted } from 'vue';

let running = ref(false);
let elapsed = ref(0);
let sessionTime = ref('00:00');
let intervalId = null;

const formatTime = (secs) => {
    const m = String(Math.floor(secs / 60)).padStart(2, '0');
    const s = String(secs % 60).padStart(2, '0');
    return `${m}:${s}`;
};

const updateTime = () => {
    sessionTime.value = formatTime(elapsed.value);
};

const startTimer = () => {
    if (!intervalId) {
        intervalId = setInterval(() => {
            elapsed.value++;
            updateTime();
        }, 1000);
    }
};

const stopTimer = () => {
    if (intervalId) {
        clearInterval(intervalId);
        intervalId = null;
    }
};

const toggleTimer = () => {
    running.value = !running.value;
    if (running.value) {
        startTimer();
    } else {
        stopTimer();
    }
};

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