<script setup>
import { ref, defineProps } from 'vue';
import RepSet from '@/components/RepSet.vue';

const props = defineProps({
    item: {
        type: Object,
        required: true,
        validator: i => typeof i.sets === 'number' && typeof i.reps === 'number'
    }
});

const emit = defineEmits(['exercise-hidden']);


const hidden = ref(false);
const completedSets = ref(new Set());

function hide() {
    hidden.value = true;
    emit('exercise-hidden');
}

function toggleSetDone({ setIndex, done }) {
    if (done) {
        completedSets.value.add(setIndex);
    } else {
        completedSets.value.delete(setIndex);
    }

    if (completedSets.value.size === props.item.sets) {
        hide();
    }
}
</script>

<template>
    <div class="exercise">
        <div :class="{ 'd-none': hidden }">
            <h4>{{ props.item.name }}</h4>
            <RepSet v-for="setIndex in props.item.sets" :key="setIndex" :setIndex="setIndex" :reps="props.item.reps"
                @set-done="toggleSetDone" />
        </div>
        <a href="#" @click.prevent="hidden = !hidden">{{ hidden ? 'show' : 'hide' }}</a>
    </div>
</template>


<style scoped>
.exercise {
    border: 1px solid #ccc;
    border-radius: 8px;
    padding: 0.5rem;
    margin-bottom: 0.5rem;
    background-color: #002b00;
}
</style>
