<template>
  <Suspense>
    <template #default>
      <SingleUser />
    </template>
    <template #fallback>
      <b>Loading...</b>
    </template>
  </Suspense>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import SingleUser from '../components/SingleUser.vue';

export default defineComponent({
  name: 'Home',
  components: {
    SingleUser
  }
});
</script>
