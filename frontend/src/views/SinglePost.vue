<template>
  <Suspense>
    <template #default>
      <SinglePost />
    </template>
    <template #fallback>
      <b>Loading...</b>
    </template>
  </Suspense>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import SinglePost from '../components/SinglePost.vue';

export default defineComponent({
  name: 'Home',
  components: {
    SinglePost
  }
});
</script>
