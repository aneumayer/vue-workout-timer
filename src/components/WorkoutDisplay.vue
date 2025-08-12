<script setup>
import { ref, defineProps, computed } from 'vue';
import Superset from '@/components/Superset.vue';
import Exercise from '@/components/Exercise.vue';

const props = defineProps({
    workout: {
        type: Array,
        required: true
    }
});

// Build an array of superset indices ahead of time:
const supersetIndices = computed(() => {
    let count = 0;
    return props.workout.map(sub => {
        if (Array.isArray(sub)) {
            return ++count;
        }
        return null;
    });
});
</script>

<template>
    <div v-if="!props.workout">
        Loading workout…
    </div>
    <div v-else>
        <div v-for="(sub, idx) in props.workout" :key="idx">
            <Superset v-if="Array.isArray(sub)" :items="sub" :supersetCount="supersetIndices[idx]" />
            <Exercise v-else :item="sub" />
        </div>
    </div>
</template>
