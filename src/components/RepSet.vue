<script setup>
import { ref, defineProps } from 'vue';

let setDone = ref(false);
defineProps({
    setIndex: {
        type: Number,
        required: true
    },
    reps: {
        type: Number,
        required: true
    }
})
</script>

<template>
    <div class="rep-block">
        <div class="form-check">
            <input class="form-check-input" type="checkbox" v-bind:value="setDone"></input>
            Set {{ setIndex }}: {{ reps }} Reps
        </div>
    </div>
</template>

<style scoped>
</style>
