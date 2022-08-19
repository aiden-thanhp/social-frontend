import React from 'react';
import { useParams } from 'react-router-dom';
import MainLayout from '../../Layout/MainLayout';
import PostDisplay from '../../components/PostDisplay/PostDisplay.component';
import { deletePost, listPostsByUser, readUser } from '../../utils/api';
import ProfileDisplay from './components/ProfileDisplay.component';

const ProfilePage = ({ pages, token, currentUserId }) => {
    const { userId } = useParams();
    const [posts, setPosts] = React.useState();
    const [user, setUser] = React.useState();

    const logined = token && currentUserId === userId ? "true" : "false";

    React.useEffect(() => {
        const controller = new AbortController();
        const signal = controller.signal;

        listPostsByUser(userId, signal).then(({ data: posts }) => setPosts(posts))
        readUser(userId, signal).then(({ data }) => setUser(data[0]))
    }, [userId])

    function handleDelete(postId) {
        if (window.confirm(`Delete this post?`)) {
            deletePost(postId);
            window.location.reload();
        }
    }

    if (posts && user) {
        return (
            <MainLayout pages={pages} token={token} currentUserId={currentUserId} children={
                <div>
                    <ProfileDisplay user={user} logined={logined}/>
                    {posts.map((post) => {
                        return (
                            <div key={post.post_id}>
                                <PostDisplay 
                                    post={post} 
                                    handleDelete={() => handleDelete(post.post_id)} 
                                    logined={logined}
                                />
                            </div>
                        )
                    })}
                </div>
            } 
            />
        )
    }

    return <h1>Loading posts here...</h1>
}

export default ProfilePage;