<template>
  <Suspense>
    <template #default>
      <AllPosts />
    </template>
    <template #fallback>
      <b>Loading...</b>
    </template>
  </Suspense>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import AllPosts from '../components/AllPosts.vue';

export default defineComponent({
  name: 'Home',
  components: {
    AllPosts
  }
});
</script>
