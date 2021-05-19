<template>
    <div>
        <h2>Users list</h2>
         <div v-for="user in users" :key="user.id">
            <p>{{ user.name }}</p>
            <router-link :to="'/users/' + user.id">View user posts ></router-link>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { getAllUsers } from '../state'

    export default defineComponent({
        name: 'AllUsers',

        async setup() {
            const { users, load } = getAllUsers();
            await load();

            return { users }
        }
    })
</script>

<style lang="scss" scoped>

</style>