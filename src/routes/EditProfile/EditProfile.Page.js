import { 
    Typography,
    Box
} from "@mui/material";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import Form from "../../components/Form/Form.component";
import { readUser, updateUser } from "../../utils/api";

export default function EditProfile({ token, currentUserId }) {
    const { userId } = useParams();
    const [user, setUser] = React.useState();
    const navigate = useNavigate()

    React.useEffect(() => {
        const controller = new AbortController();
        const signal = controller.signal;
        readUser(userId, signal).then(({ data }) => setUser(data[0]))
    }, [userId]);

    if (token && currentUserId === userId) {
        if (user) {
            function handleCancel() {
                navigate(`/users/${userId}`);
            }

            async function handleSubmit(event, user) {
                event.preventDefault();

                const controller = new AbortController();
                const signal = controller.signal;
                const updatedUser = {
                    bio: user.bio,
                    location: user.location,
                    picture: user.picture,
                    user_id: user.user_id
                };
                updateUser(user.user_id, { data: updatedUser }, signal).then(() => navigate(`/users/${userId}`))
            }

            const updateUserInputs = [
                {
                    name: "bio",
                    id: "bio",
                    label: "Bio",
                    variant: "outlined"
                },
                {
                    name: "picture",
                    id: "picture",
                    label: "Picture",
                    variant: "outlined"
                },
                {
                    name: "location",
                    id: "location",
                    label: "Location",
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
                        Edit Profile
                    </Typography>           
                    <Form 
                        onSubmit={handleSubmit} 
                        onCancel={handleCancel}
                        formInputs={updateUserInputs}
                        previousData={user}
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