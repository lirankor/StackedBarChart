<template>
  <div class="bar-container">
    <div
      v-for="(value, key, index) in sortedAndLimitedValues"
      :key="key"
      class="bar"
      v-tooltip="`${key}: ${value}`"
      :style="{ width: `${value}%`, backgroundColor: colors[index % colors.length] }"
    ></div>
  </div>
</template>

<script>
export default {
  props: {
    values: {
      type: Object,
      required: true
    },
    limit: {
      type: Number,
      default: Infinity
    },
    sort: {
      type: String,
      default: 'asc', // 'asc' for ascending, 'desc' for descending
      validator(value) {
        return ['asc', 'desc'].includes(value);
      }
    },
    ignore: {
      type: Array,
      default: () => [] // Default is an empty array
    },
    colors: {
      type: Array,
      default: () => [
        '#4CAF50', '#2E93fA', '#5eacea', '#eab56c', '#daa3ea',
        '#66DA26', '#546E7A', '#FFC107',
        '#FF9800', '#795548', '#607D8B'
      ]
    }
  },
  computed: {
    sortedAndLimitedValues() {
      // Create a new object to avoid mutation
      const newValues = { ...this.values };

      // Filter out ignored keys
      for (const key in newValues) {
        if (this.ignore.includes(key)) {
          delete newValues[key];
        }
      }

      // Convert to array of [key, value] pairs
      const entries = Object.entries(newValues);

      // Sort entries based on sort prop
      entries.sort((a, b) => this.sort === 'asc' ? a[1] - b[1] : b[1] - a[1]);

      // Limit the number of entries
      entries.splice(this.limit);

      // Convert entries back to object
      return Object.fromEntries(entries);
    }
  }
}
</script>

<style scoped>
.bar-container {
  display: flex;
  width: 100%; /* adjust as needed */
  height: 10px; /* adjust as needed */
  border-radius: 3px; /* adjust as needed */
  overflow: hidden;
}

.bar {
  height: 100%;
  border-right: 1px solid white;
}
</style>