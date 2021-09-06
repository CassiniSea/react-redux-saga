import axios from "axios";

export const postsActionTypes = {
    GET_POSTS: 'POSTS/GET_POSTS',
}

export const getPostsAsync = () => {
    return async dispatch => {
        const {data: posts} = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=5')
        dispatch({
            type: postsActionTypes.GET_POSTS,
            payload: posts
        })
    }
}