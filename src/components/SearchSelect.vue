<template>
  <div>
    <input
      type="hidden"
      :name="$attrs.name"
      v-if="$attrs.name"
      :value="value"
    />

    <label class="block mb-1 text-sm font-medium leading-5 text-gray-700">
      {{ label }}
    </label>
  </div>
</template>

<script>
import DefaultProps from "./DefaultProps";

export default {
  props: {
    ...DefaultProps,
  },
  data() {
    return {
      label: "Sample",
    };
  },
};
</script>