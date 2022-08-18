import React from 'react';
import MainLayout from '../../Layout/MainLayout';
import PostDisplay from '../../components/PostDisplay/PostDisplay.component';
import { listPosts, readUser } from '../../utils/api';
import CreatePost from './components/CreatePost.component';

const MainPage = ({ pages }) => {
    const [posts, setPosts] = React.useState();
    const [user, setUser] = React.useState();

    const userId = '18';

    React.useEffect(() => {
        const controller = new AbortController();
        const signal = controller.signal;

        listPosts(signal).then(({ data: posts }) => setPosts(posts))
        readUser(userId, signal).then(({ data }) => setUser(data[0]))
    }, [])
    
    if (posts && user) {
        return (
            <MainLayout pages={pages} children={
                <div>
                    <CreatePost user={user} />
                    {posts.map((post) => {
                        return (
                            <PostDisplay post={post} edit="false" del="false" />
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