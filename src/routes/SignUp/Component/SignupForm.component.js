import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import Form from "../../../components/Form/Form.component"
import { createUser } from "../../../utils/api"
import { 
    Box, 
    Button, 
    Divider 
} from '@mui/material';

const SignupForm = () => {
    const navigate = useNavigate();

    const buttonName = "Sign Up";

    const loginInputs = [
        {
            name: "name",
            id: "name",
            label: "Name",
            variant: "outlined"
        },
        {
            name: "username",
            id: "username",
            label: "Username",
            variant: "outlined"
        },
        {
            name: "password",
            id: "password",
            label: "Password",
            variant: "outlined"
        },
        {
            name: "email",
            id: "email",
            label: "Email address",
            variant: "outlined"
        }
    ]

    function handleSubmit(event, user) {
        event.preventDefault();
        const controller = new AbortController();
        const signal = controller.signal;
        createUser({data: user}, signal).then((result) => {
            console.log(result);
            navigate("/login");
        }).catch((error) => window.alert(error))
    }

    return (
        <Box
            sx={{
                width: 320,
                py: 2,
                boxShadow: 5,
                borderRadius: 1,
                display: 'flex',
                flexDirection: 'column',
            }}
        >
            <Form 
                onSubmit={handleSubmit}
                formInputs={loginInputs}
                buttonName={buttonName}
                flex={`column`}
            />
            <Divider />
            <Button 
                sx={{ my: 2 }}
                href="/login"
            >
                Log In
            </Button>
        </Box>
    )
}

export default SignupForm;