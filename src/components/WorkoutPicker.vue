<script setup>
import { onMounted } from 'vue';
import { useWorkoutStore } from '@/stores/workout';

const workoutStore = useWorkoutStore();

onMounted(() => {
    if (workoutStore.selectedWorkoutName) {
        setWorkout();
    }
});

const setWorkout = () => {
    workoutStore.selectWorkout(workoutStore.selectedWorkoutName);
};
</script>

<template>
    <div class="picker d-flex justify-content-center">
        <label for="fileSelect">Workout:</label>
        <select id="fileSelect" v-model="workoutStore.selectedWorkoutName"
            @change="setWorkout">
            <option v-for="name in workoutStore.workoutNames" :key="name" :value="name">
                {{ name.replace(/_/g, ' ') }}
            </option>
        </select>
    </div>
</template>

<style scoped>
.picker {
    width: 30rem;
    
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