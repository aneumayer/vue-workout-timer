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

const resetTimer = () => {
    elapsed.value = 0;
    stopTimer();
    running.value = false;
    sessionTime.value = '00:00';
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
    <div class="timer">
        <div class="display">{{ sessionTime }}</div>
        <div class="controls">
            <button class="control-button" @click="toggleTimer">{{ running ? 'Pause' : 'Start' }}</button>
            <button class="control-button" @click="resetTimer">Reset</button>
        </div>
    </div>
</template>

<style scoped>
.timer {
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 1rem;
    margin-bottom: 1rem;
}
.display {
    font-size: 3em;
}
.control-button {
    margin: 0.5em;
}
</style>