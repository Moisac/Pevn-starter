<template>
  <Suspense>
    <template #default>
      <AllUsers />
    </template>
    <template #fallback>
      Loading...
    </template>
  </Suspense>
</template>

<script>
import { defineComponent } from 'vue';
import AllUsers from '../components/AllUsers.vue';

export default defineComponent({
  name: 'Users',
  components: {
    AllUsers
  }
})
</script>
