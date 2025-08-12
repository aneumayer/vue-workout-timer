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

const hidden = ref(false);
function hide() {
    hidden.value = !hidden.value;
}
</script>

<template>
    <div class="exercise">
        <div :class="{ 'd-none': hidden }">
            <h4>{{ props.item.name }}</h4>
            <RepSet v-for="setIndex in props.item.sets" :key="setIndex" :setIndex="setIndex" :reps="props.item.reps" />
        </div>
        <a href="#" @click.prevent="hide">{{hidden ? 'expand' : 'collapse'}}</a>
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
