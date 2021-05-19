<template>
    <div>
        <b>{{ post.title }}</b>
        <p>{{ post.content }}</p>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { getSinglePost } from '../state';

export default defineComponent({
  name: 'SinglePost',
  props: {
      id: {
          type: Number
      },
  },

  async setup() {
    const { post, load } = getSinglePost();

    await load();
    return { post }
  }
});
</script>

