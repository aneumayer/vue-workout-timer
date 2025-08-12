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
function hide() {
    hidden.value = !hidden.value;
}
</script>

<template>
    <div class="superset">
        <h3>Superset {{ supersetCount }}</h3>
        <div :class="{ 'd-none': hidden }" v-for="(exercise, idx) in props.items" :key="idx">
            <Exercise :item="exercise" />
        </div>
        <a href="#" @click.prevent="hide">{{hidden ? 'expand' : 'collapse'}}</a>
    </div>
</template>

<style scoped>
.superset {
    width: 30rem;
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 1rem;
    margin-bottom: 1rem;
    background-color: #00002b;
}
</style>
