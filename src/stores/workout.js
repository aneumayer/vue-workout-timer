import { defineStore } from 'pinia';

export const useWorkoutStore = defineStore('workout', {
    state: () => {
        const modules = import.meta.glob('@/assets/workouts/*.json', { eager: true });
        const fileEntries = Object.entries(modules).map(([path, data]) => ({
            name: path.replace(/^.*\/([^.]+)\.json$/, '$1'),
            path,
            data
        }));

        return {
            workouts: fileEntries,
            selectedWorkoutName: fileEntries[0]?.name || null,
            selectedWorkoutData: fileEntries[0]?.data?.default || null
        };
    },
    getters: {
        workoutNames: (state) => state.workouts.map(entry => entry.name)
    },
    actions: {
        selectWorkout(name) {
            const entry = this.workouts.find(e => e.name === name);
            this.selectedWorkoutName = name;
            this.selectedWorkoutData = entry?.data?.default || null;
        }
    }
});
