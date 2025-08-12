<script setup>
import { defineProps } from 'vue';
import RepSet from '@/components/RepSet.vue';

const props = defineProps({
    item: {
        type: Object,
        required: true,
        validator: i => typeof i.sets === 'number' && typeof i.reps === 'number'
    }
});
</script>

<template>
    <div class="exercise">
        <h4>{{ props.item.name }}</h4>
        <RepSet v-for="setIndex in props.item.sets" :key="setIndex" :setIndex="setIndex" :reps="props.item.reps" />
    </div>
</template>

<style scoped>
.exercise {
    border: 1px solid #ccc;
    border-radius: 8px;
    padding: 0.5rem;
    margin-bottom: 0.5rem;
    background-color: #00002b;
}
</style>
