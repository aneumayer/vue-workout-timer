<script setup>
import { ref, onMounted } from 'vue';

// Glob all JSON files in @/assets/workouts and build a list of filenames and their paths
const modules = import.meta.glob('@/assets/workouts/*.json', { eager: true });
const fileEntries = Object.entries(modules).map(([path, data]) => ({
    name: path.replace(/^.*\/([^.]+)\.json$/, '$1'), path, data
}));
const fileNames = fileEntries.map(entry => entry.name);
const selected = ref(fileNames[0] || null);

// Get the contents of the selected file and pass it up to parent
const emit = defineEmits(['selectedWorkout']);
const loadFile = (name) => {
    const entry = fileEntries.find(e => e.name === name);
    emit('selectedWorkout', entry.data.default);
}

// Load the first file in the list
onMounted(() => {
    if (selected.value) loadFile(selected.value);
});
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
    margin-bottom: 0.5rem;
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