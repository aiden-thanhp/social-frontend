import { 
    Typography,
    Box
} from "@mui/material";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import Form from "../../components/Form/Form.component";
import { readPost, updatePost } from "../../utils/api";

export default function EditPost() {
    const { postId } = useParams();
    const [post, setPost] = React.useState();
    const navigate = useNavigate()

    React.useEffect(() => {
        const controller = new AbortController();
        const signal = controller.signal;
        readPost(postId, signal).then(({ data: post }) => setPost(post))
    }, [postId]);

    if (post) {
        function handleCancel() {
            navigate(`/users/${postId}`);
        }

        async function handleSubmit(event, post) {
            event.preventDefault();

            const controller = new AbortController();
            const signal = controller.signal;
            const updatedPost = {
                post_id: post.post_id,
                content: post.content
            };
            updatePost({ data: updatedPost }, signal).then((result) => console.log(result))
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
            <Box disableGlutters>
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
}