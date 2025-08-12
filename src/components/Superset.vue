<script setup>
import Exercise from '@/components/Exercise.vue'

const props = defineProps({
    items: {
        type: Array,
        required: true
    }
});
</script>

<template>
    <div class="superset">
        <h3>Superset</h3>
        <div v-for="(exercise, idx) in props.items" :key="idx">
            <Exercise :item="exercise" />
        </div>
    </div>
</template>

<style scoped>
.superset {
    width: 30rem;
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 1rem;
    margin-bottom: 1rem;
    background-color: #2b0000;
}
</style>
