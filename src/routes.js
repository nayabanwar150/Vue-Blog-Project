import { component } from 'vue/types/umd'
import Users from '../src/components/Users.vue'
import UserPosts from '../src/components/UserPosts.vue'
import PostDetails from '../src/components/PostDetails'

const routes = [
    {path: '/', component: Users},
    {path: '/user-posts', component: UserPosts},
    {path: '/post-details', component: PostDetails}
]

export default routes;