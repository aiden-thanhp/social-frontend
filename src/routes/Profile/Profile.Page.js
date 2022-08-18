import React from 'react';
import { useParams } from 'react-router-dom';
import MainLayout from '../../Layout/MainLayout';
import PostDisplay from '../../components/PostDisplay/PostDisplay.component';
import { deletePost, listPostsByUser, readUser } from '../../utils/api';
import ProfileDisplay from './components/ProfileDisplay.component';

const ProfilePage = ({ pages }) => {
    const { userId } = useParams();
    const [posts, setPosts] = React.useState();
    const [user, setUser] = React.useState();

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
            <MainLayout pages={pages} children={
                <div>
                    <ProfileDisplay user={user} />
                    {posts.map((post) => {
                        return (
                            <PostDisplay post={post} handleDelete={() => handleDelete(post.post_id)} />
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