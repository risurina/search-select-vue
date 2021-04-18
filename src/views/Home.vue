<template>
  <div class="home">
    <SearchSelect label="Sample" value="sample" />
  </div>
</template>

<script>
// @ is an alias to /src
import SearchSelect from "@/components/SearchSelect.vue";

export default {
  name: "Home",
  components: {
    SearchSelect,
  },
};
</script>
