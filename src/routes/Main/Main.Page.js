import React from 'react';
import MainLayout from '../../Layout/MainLayout';
import PostDisplay from '../../components/PostDisplay/PostDisplay.component';
import { listPosts, readUser } from '../../utils/api';
import CreatePost from './components/CreatePost.component';

const MainPage = ({ pages, currentUserId, token }) => {
    const [posts, setPosts] = React.useState();
    const [user, setUser] = React.useState();

    React.useEffect(() => {
        const controller = new AbortController();
        const signal = controller.signal;

        listPosts(signal).then(({ data: posts }) => setPosts(posts))
        if (currentUserId) {
            readUser(currentUserId, signal).then(({ data }) => {
                setUser(data[0]);   
            })
        }
    }, [currentUserId])
    
    if (posts) {
        return (
            <MainLayout pages={pages} token={token} currentUserId={currentUserId} children={
                <div>
                    {user ? <CreatePost user={user} /> : "" }
                    {posts.map((post) => {
                        return (
                            <div key={post.post_id}>
                                <PostDisplay post={post} logined="false" />
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

export default MainPage;