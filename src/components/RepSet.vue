<script setup>
import { ref } from 'vue';

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

const onCheckboxChange = (event) => {
    const newValue = event.target.checked;
    setDone.value = newValue; // Update the local state
    emit('setDone', { 
        setIndex: props.setIndex,
        done: newValue
    });
};
</script>

<template>
    <div v-if="props.setIndex" class="rep-block">
        <div class="form-check">
            <input class="form-check-input" type="checkbox" :checked="setDone" @change="onCheckboxChange" />
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