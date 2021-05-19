import { ref, reactive } from 'vue'
import axios from 'axios'
import { useRoute } from 'vue-router';

export interface IPost {
    id: number,
    title: string,
    content: string,
    published: boolean,
    authorId: number,
}

export interface IUser {
    id: number,
    name: string,
    email: string,
    posts: IPost[]
}

interface IState {
    posts: IPost[],
    users: IUser[]
}

const production = process.env.NODE_ENV === 'production'

export const state: IState = reactive({
    posts: [],
    users: []
})

export const getAllPosts = () => {
    const posts = ref(null)
    
    const load = async() => {
        const { data } = await axios.get(`${production ? '/posts' : 'http://localhost:4000/posts'}`)
        posts.value = await data
    }

    return { posts, load }
}

export const getSinglePost = () => {
    const post = ref(null)
    const { params: { id } } = useRoute()

    const load = async () => {
        const { data } = await axios.get(`${production ? `/posts/${id}` : `http://localhost:4000/posts/${id}`}`)
        post.value = await data
    }

    return {
        post,
        load,
    }
}

export const getAllUsers = () => {
    const users = ref(null);

    const load = async () => {
        const { data } = await axios.get(`${production ? '/users' : 'http://localhost:4000/users'}`)
        users.value = await data
    }

    return { users, load }
}

export const getSingleUser = () => {
    const user = ref(null);
    const { params: {id} } = useRoute();

    const load = async () => {
        const { data } = await axios.get(`${production ? `/users/${id}` : `http://localhost:4000/users/${id}`}`)
        user.value = await data
    }

    return { user, load }
}