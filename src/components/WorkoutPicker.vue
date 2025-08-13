<script setup>
import { ref, defineEmits } from 'vue';

const emit = defineEmits(['selectedWorkout']);
// Glob all JSON files in /src/assets/workouts
const modules = import.meta.glob('@/assets/workouts/*.json', { eager: true });
// Build a list of filenames and their paths
const fileEntries = Object.entries(modules).map(([path, data]) => ({
    name: path.replace(/^.*\/([^.]+)\.json$/, '$1'), path, data
}));
const fileNames = fileEntries.map(entry => entry.name);
const selected = ref(fileNames[0] || null);

// Get the contents of the selected file and pass it up
function loadFile(name) {
    const entry = fileEntries.find(e => e.name === name);
    let workout = null;
    if (entry && entry.data && entry.data.default) {
        workout = entry.data.default;
    } else if (entry) {
        workout = entry.data;
    }
    emit('selectedWorkout', workout);
}

if (selected.value) loadFile(selected.value);
</script>

<template>
    <div class="picker d-flex justify-content-center">
        <select id="fileSelect" v-model="selected" @change="loadFile(selected)">
            <option v-for="name in fileNames" :key="name" :value="name">
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
    margin-bottom: 1rem;
    background-color: #2b2b00;
}

.picker-parts {
    display: inline-block;
}

label {
    padding-right: 1rem;
}

select {
    padding: 0.3rem 1rem;
    border-radius: 8px;
}
</style>