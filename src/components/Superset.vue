<script setup>
import { ref, defineProps } from 'vue';
import Exercise from '@/components/Exercise.vue';

const props = defineProps({
    items: {
        type: Array,
        required: true
    },
    supersetCount: {
        type: Number,
        required: true
    }
});

const hidden = ref(false);
const hiddenExercises = ref(0);

function hide() {
    hidden.value = !hidden.value;
}

function onExerciseHidden() {
  hiddenExercises.value += 1;
  if (hiddenExercises.value === props.items.length) {
    hide();
  }
}
</script>

<template>
    <div class="superset">
        <h3>Superset {{ supersetCount }}</h3>
        <div :class="{ 'd-none': hidden }">
            <Exercise v-for="(exercise, idx) in props.items" :key="idx" :item="exercise"
                @exercise-hidden="onExerciseHidden" />
        </div>
        <a href="#" @click.prevent="hide">{{ hidden ? 'show' : 'hide' }}</a>
    </div>
</template>

<style scoped>
.superset {
    width: 30rem;
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 0.5rem;
    margin-bottom: 0.5rem;
    background-color: #00002b;
}
</style>
