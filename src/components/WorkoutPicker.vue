<script setup>
import { onMounted } from 'vue';
import { useWorkoutStore } from '@/stores/workout';

const workoutStore = useWorkoutStore();

onMounted(() => {
    if (workoutStore.selectedWorkoutName) {
        workoutStore.selectWorkout(workoutStore.selectedWorkoutName);
    }
});
</script>

<template>
    <div class="picker d-flex justify-content-center">
        <label for="fileSelect">Workout:</label>
        <select id="fileSelect" v-model="workoutStore.selectedWorkoutName"
            @change="workoutStore.selectWorkout(workoutStore.selectedWorkoutName)">
            <option v-for="name in workoutStore.workoutNames" :key="name" :value="name">
                {{ name.replace(/_/g, ' ') }}
            </option>
        </select>
    </div>
</template>

<style scoped>
.picker {
    width: 30rem;
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 0.5rem;
    margin-bottom: 0.5rem;
    background-color: #2b2b00;
    vertical-align: middle;
}

label {
    padding: 0.2rem 0.5rem 0.2rem 0;
}

select {
    padding: 0.3rem 1rem;
    border-radius: 8px;
}
</style>