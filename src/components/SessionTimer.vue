<script setup>
import { ref, computed, onUnmounted } from 'vue';

// Set the intervale for the timer
const elapsed = ref(0);
const intervalId = ref(null);
const buttonText = computed(() => {
    return intervalId.value ? 'Stop' : 'Start';
})

// Set the interval for one second
const startTimer = () => {
    if (!intervalId.value) {
        intervalId.value = setInterval(() => {
            elapsed.value += 1; 
        }, 1000);
    }
};

// Clear the intervale to pause the timer
const stopTimer = () => {
    if (intervalId.value) {
        clearInterval(intervalId.value);
        intervalId.value = null;
    }
};

// Reset the app by reloading the page
const onClickreset = () => {
    location.reload();
};


// Whenever the elapsed time changes format the sessionTime
const sessionTime = computed(() => {
    const m = String(Math.floor(elapsed.value / 60)).padStart(2, '0');
    const s = String(elapsed.value % 60).padStart(2, '0');
    return `${m}:${s}`;
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
            <button class="control-button p-1" @click="toggleTimer">{{ buttonText }}</button>
            <button class="control-button p-1" @click="onClickreset">Reset</button>
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