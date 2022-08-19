import { 
    Avatar,
    Card,
    CardActions,
    CardContent,
    CardHeader,
    IconButton,
    Typography
} from '@mui/material';
import * as React from 'react';
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate } from 'react-router-dom';

export default function PostDisplay({ post, logined = "false", handleDelete }) {
    const navigate = useNavigate();

    let edit = "false";
    let del = "false"
    if (logined === "true" ) {
        edit = "true";
        del = "true";
    }
    return (
        <Card
            sx={{ width: '100%', my: 2 }}
        >
            <CardHeader
                avatar={
                    <Avatar 
                        alt={post.name}
                        src={post.picture}
                        sx={{ border: '1px solid pink' }}
                    />
                }
                title={post.name}
                subheader={`Created at ${post.created_at}`}
            />
            <CardContent>
                <Typography
                    variant="body2"
                    color="text.secondary"
                >
                    {post.content}
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                {edit !== "false"
                    ? <IconButton 
                        aria-label="edit"
                        onClick={() => navigate(`/posts/${post.post_id}/edit`)}
                    >
                        <EditIcon />
                        <Typography
                            variant="body2"
                            color="text.primary"
                            sx={{ pl: 1 }}
                        >
                            Edit Post
                        </Typography>
                    </IconButton>
                    : ""
                }
                {del !== "false"
                    ? <IconButton 
                        aria-label="del"
                        onClick={handleDelete}
                    >
                        <DeleteIcon />
                        <Typography
                            variant="body2"
                            color="text.primary"
                            sx={{ pl: 1 }}
                        >
                            Delete Post
                        </Typography>
                    </IconButton>
                    : ""
                }
            </CardActions>
        </Card>
    )
}