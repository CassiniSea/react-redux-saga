import axios from "axios";

export const postsActionTypes = {
    GET_POSTS: 'POSTS/GET_POSTS',
    FORCE_SAGA: 'POSTS/FORCE_SAGA',
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

export const forceSaga = {
    type: postsActionTypes.FORCE_SAGA,
}

export const setPosts = posts => ({
    type: postsActionTypes.GET_POSTS,
    payload: posts,
})

export const getPostsByNumberSaga = async number => {
    const {data: posts} = await axios.get(`https://jsonplaceholder.typicode.com/posts?_limit=${number}`)
    return posts
}
