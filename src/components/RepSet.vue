<script setup>
import { ref, watch } from 'vue';

const props = defineProps({
    setIndex: {
        type: Number,
        required: true
    },
    reps: {
        type: Number,
        required: true
    }
});

const emit = defineEmits(['setDone']);

// When the check box is done pass a done event to the parent
const setDone = ref(false);
watch(setDone, (newVal) => {
    emit('setDone', { 
        setIndex: props.setIndex,
        done: newVal
    });
});
</script>

<template>
    <div v-if="props.setIndex" class="rep-block">
        <div class="form-check">
            <input class="form-check-input" type="checkbox" v-model="setDone" />
            Set {{ setIndex }}: {{ reps }} Reps
        </div>
    </div>
</template>

<style scoped>
.rep-block {
    border: 1px solid #ccc;
    border-radius: 8px;
    padding: 0.2rem 0.5rem;
    margin-bottom: 0.2rem;
    background-color: #2b1800;
}

input[type="checkbox"] {
    color: #2b1800;
    border: 1px solid #ccc;
    background-color: #2b1800;
}
</style>