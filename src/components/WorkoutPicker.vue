<script setup>
import { ref } from 'vue';
import WorkoutDisplay from '@/components/WorkoutDisplay.vue';

// Glob all JSON files in /src/assets/workouts
const modules = import.meta.glob('@/assets/workouts/*.json', { eager: true });

// Build a list of filenames and their paths
const fileEntries = Object.entries(modules).map(([path, data]) => ({
  name: path.replace(/^.*\/([^.]+)\.json$/, '$1'), path, data
}));

const fileNames = fileEntries.map(entry => entry.name);

const selected = ref(fileNames[0] || null);
const data = ref(null);

function loadFile(name) {
  const entry = fileEntries.find(e => e.name === name);
  // If the imported data is an object with a default property, use that
  if (entry && entry.data && entry.data.default) {
    data.value = entry.data.default;
  } else {
    data.value = entry ? entry.data : null;
  }
}

if (selected.value) loadFile(selected.value);
</script>

<template>
  <div class="picker">
    <label for="fileSelect"><b>Select Workout:</b></label>
    <select id="fileSelect" v-model="selected" @change="loadFile(selected)">
      <option v-for="name in fileNames" :key="name" :value="name">
        {{ name.replace(/_/g, ' ') }}
      </option>
    </select>
  </div>
  <WorkoutDisplay v-if="data" :workout="data" />
</template>

<style scoped>
.picker {
  border: 1px solid #ddd;
    border-radius: 8px;
    padding: 1rem;
    margin-bottom: 1rem;
}
</style>