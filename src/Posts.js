import React, {useEffect} from 'react';
import {connect} from "react-redux";
import {getPostsAsync} from "./store/posts/actions";

const Posts = ({dispatch, posts}) => {

    useEffect(() => {
        dispatch(getPostsAsync())
    }, [dispatch])

    return <>
        {posts.map((post, index) => (
            <div className="card" key={index}>
                <div className="card-body">
                    <div className="row">
                        <div className="col-1">
                            {post.id}
                        </div>
                        <div className="col">
                            {post.body}
                        </div>
                    </div>
                </div>
            </div>
        ))}
    </>
}

export default connect(state => ({
    posts: state.posts.posts
}))(Posts);