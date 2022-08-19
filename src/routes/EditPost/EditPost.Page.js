import { 
    Typography,
    Box
} from "@mui/material";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import Form from "../../components/Form/Form.component";
import { readPost, updatePost } from "../../utils/api";

export default function EditPost({ token, currentUserId }) {
    const { postId } = useParams();
    const [post, setPost] = React.useState();
    const navigate = useNavigate()

    React.useEffect(() => {
        const controller = new AbortController();
        const signal = controller.signal;
        readPost(postId, signal).then(({ data: post }) => setPost(post));
    }, [postId]);
    
    if (token && currentUserId) {
        if (post) {
            function handleCancel() {
                navigate(`/`);
            }

            async function handleSubmit(event, post) {
                event.preventDefault();

                const controller = new AbortController();
                const signal = controller.signal;
                const updatedPost = {
                    content: post.content
                };
                updatePost(post.post_id, { data: updatedPost }, signal).then(() => {
                    navigate(`/`)
                })
            }

            const updatePostInputs = [
                {
                    name: "content",
                    id: "content",
                    label: "Content",
                    variant: "outlined"
                }
            ];

            return (
                <Box>
                    <Typography
                    variant="h5"
                    component="h2"
                    href=""
                    sx={{
                        textAlign: 'center',
                        my: 2
                    }}
                    >
                        Edit Post
                    </Typography>           
                    <Form 
                        onSubmit={handleSubmit} 
                        onCancel={handleCancel}
                        formInputs={updatePostInputs}
                        previousData={post}
                        buttonName="Submit"
                        flex="column"
                    />
                </Box>
            )
        }
    } else {
        navigate("/login")
    }
}