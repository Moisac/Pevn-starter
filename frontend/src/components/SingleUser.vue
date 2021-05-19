<template>
    <div>
         <div v-for="user in users" :key="user.id">
            <h4><b>{{ user.name }}</b>'s posts</h4>
            <hr />
            <ul v-for="post in user.posts" :key="post.id">
                <li><router-link :to="'/posts/' + post.id">{{ post.title }}</router-link></li>
            </ul>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { getAllUsers } from '../state'

    export default defineComponent({
        name: 'SingleUser',

        async setup() {
            const { users, load } = getAllUsers();
            await load();

            return { users }
        }
    })
</script>

<style lang="scss" scoped>

</style>