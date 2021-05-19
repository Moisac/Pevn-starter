<template>
    <div>
        <h2>Posts lists</h2>
        <div v-for="post in posts" :key="post.id">
            <router-link :to="'/posts/' + post.id">{{ post.title }}</router-link>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { getAllPosts } from '../state';

export default defineComponent({
  name: 'AllPosts',

  async setup() {
    const { posts, load } = getAllPosts();

    await load();
    return { posts }
  }
});
</script>

