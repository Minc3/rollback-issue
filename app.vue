<script lang="ts" setup>
const { data } = useFetch('/api/redis', {
  method: 'GET',
});
</script>

<template>
  <div>
    <h1>Redis Status:</h1>
    <pre>{{ data }}</pre>
  </div>
</template>
