import { 
    Avatar,
    Card,
    CardContent,
    CardActions,
    CardHeader,
    Typography,
    IconButton
} from '@mui/material';
import * as React from 'react';
import EditIcon from "@mui/icons-material/Edit"
import { useNavigate } from 'react-router-dom';

export default function ProfileDisplay({ user, logined = "false" }) {
    const navigate = useNavigate();
    return (
        <Card
            sx={{ width: '100%', my: 2 }}
        >
            <CardHeader
                avatar={
                    <Avatar 
                        alt={user.name}
                        src={user.picture}
                        sx={{ border: '1px solid pink' }}
                    />
                }
                title={user.name}
                subheader={`Joined ${user.created_at}, ${user.location}`}
            />
            <CardContent>
                <Typography
                    variant="body2"
                    color="text.secondary"
                >
                    {`Bio: ${user.bio}`}
                </Typography>
            </CardContent>
            {logined !== "false" ?
                <CardActions disableSpacing>
                    <IconButton 
                        aria-label="edit"
                        onClick={() => navigate(`/users/${user.user_id}/edit`)}
                    >
                        <EditIcon />
                        <Typography
                            variant="body2"
                            color="text.primary"
                            sx={{ pl: 1 }}
                        >
                            Edit Profile
                        </Typography>
                    </IconButton>
                </CardActions> : ""
            }
        </Card>
    )
}