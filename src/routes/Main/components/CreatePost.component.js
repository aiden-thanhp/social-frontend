import { 
    Avatar,
    Paper 
} from '@mui/material';
import * as React from 'react';
import Form from '../../../components/Form/Form.component';
import { createPost } from '../../../utils/api';
import { useNavigate } from 'react-router-dom';

const CreatePost = ({ user }) => {
    const navigate = useNavigate();

    const createPostInput = [
        {
            name: "content",
            label: "What's happening",
            variant: "outlined",
            id: "content"
        }
    ]

    function handleSubmit(event, post) {
        event.preventDefault();

        const controller = new AbortController();
        const signal = controller.signal;
        createPost({data: { ...post, user_id: user.user_id }}, signal).then((result) => {
            console.log(result);
            navigate("/");
        }).then(() => { window.location.reload(); })
    }

    return (
        <Paper
            sx={{ 
                p: "2px 4px",
                display: 'flex',
                alignItems: 'center',
                width: '93%',
                py: 2,
                px: 2,
            }}
        >
            <Avatar 
                alt={user.name}
                src={user.picture}
                sx={{ border: '1px solid pink', mr: 2 }}
            />
            <Form 
                formInputs={createPostInput}
                onSubmit={handleSubmit}
                buttonName={`Create`}
                flex={`row`}
            />
        </Paper>
    )
}

export default CreatePost; 