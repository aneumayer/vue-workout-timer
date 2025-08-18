<script setup>
import { ref } from 'vue';
import TheExercise from '@/components/TheExercise.vue';

const props = defineProps({
    exercises: {
        type: Array,
        required: true
    },
    supersetCount: {
        type: Number,
        required: true
    }
});

// Manage the status of the of the hide button
const showStatus = ref(true);
const hideButtonText = ref('hide');
const toggleHidden = () => {
    showStatus.value = !showStatus.value;
    hideButtonText.value = showStatus ? 'hide': 'show';
}

// Handle sending hidden status to parent
const hiddenExercises = ref(0);
const onHideButtonClick = () => {
    hiddenExercises.value += 1;
    if (hiddenExercises.value === props.exercises.length) {
        toggleHidden();
    }
}
</script>

<template>
    <div class="superset">
        <h3>Superset {{ supersetCount }}</h3>
        <template v-if="props.exercises" v-show="showStatus">
            <TheExercise v-for="(exercise, idx) in props.exercises" :key="idx" 
                :exercise="exercise" @exerciseComplete="onHideButtonClick" />
        </template>
        <a href="#" @click.prevent="toggleHidden">{{ hideButtonText }}</a>
    </div>
</template>

<style>
.superset {
    width: 30rem;
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 0.5rem;
    margin-bottom: 0.5rem;
    background-color: #00002b;
}
</style>
