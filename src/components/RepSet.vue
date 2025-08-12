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
.rep-block {
    border: 1px solid #ccc;
    border-radius: 8px;
    padding: 0.5rem;
    margin-bottom: 0.5rem;
    background-color: #2b1800;
}
</style>
