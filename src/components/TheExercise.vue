<script setup>
import { ref } from 'vue';
import RepSet from '@/components/RepSet.vue';

const props = defineProps({
    exercise: {
        type: Object,
        required: true,
        validator: i => typeof i.sets === 'number' && typeof i.reps === 'number'
    }
});

const emit = defineEmits(['exerciseComplete']);

// Manage the status of the of the hide button
const showStatus = ref(true);
const hideButtonText = ref('hide');
const toggleHidden = () => {
    showStatus.value = !showStatus.value;
    hideButtonText.value = showStatus ? 'hide' : 'show';
}

// If all the reps are complete pass event to parent
const completedSets = ref(new Set());
const onSetDone = ({ setIndex, done }) => {
    // Keep track of the done reps in a set
    if (done) {
        completedSets.value.add(setIndex);
    } else {
        completedSets.value.delete(setIndex);
    }
    // If the number of done sets is the number of reps tell parent and hide
    if (completedSets.value.size === props.exercise.sets) {
        toggleHidden();
        emit('exerciseComplete');
    }
}
</script>

<template>
    <div v-if="props.exercise" class="exercise">
        <div v-show="showStatus">
            <h4>{{ props.exercise.name }}</h4>
            <RepSet v-for="setIndex in props.exercise.sets" :key="setIndex" :set-index="setIndex"
                :reps="props.exercise.reps" @set-done="onSetDone" />
        </div>
        <a href="#" @click.prevent="toggleHidden">{{ hideButtonText }}</a>
    </div>
</template>


<style>
.exercise {
    background-color: #002b00;
}
</style>
