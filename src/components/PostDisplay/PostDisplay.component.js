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
import FavoriteIcon from '@mui/icons-material/Favorite';
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from '@mui/icons-material/Delete';

export default function PostDisplay({ post, edit = "true", del = "true", handleDelete }) {
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
                <IconButton aria-label="favorites">
                    <FavoriteIcon />
                    <Typography
                        variant="body2"
                        color="text.primary"
                        sx={{ pl: 1 }}
                    >
                        {post.likes !== null ? `${post.likes} likes` : `0 likes`}
                    </Typography>
                </IconButton>
                {edit !== "false"
                    ? <IconButton aria-label="edit">
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