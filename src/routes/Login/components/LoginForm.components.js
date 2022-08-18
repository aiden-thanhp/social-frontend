import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import Form from "../../../components/Form/Form.component"
import { login } from "../../../utils/api"
import { 
    Box, 
    Button, 
    Divider 
} from '@mui/material';
import Cookies from 'universal-cookie';

const LoginForm = () => {
    const cookies = new Cookies();

    const navigate = useNavigate();
    
    const buttonName = "Log In"

    const loginInputs = [
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
        }
    ]

    function handleSubmit(event, user) {
        event.preventDefault();

        const controller = new AbortController();
        const signal = controller.signal;
        login({data: user}, signal).then((result) => {
            const accessToken = result.accessToken;
            cookies.set("TOKEN", accessToken, {
                path: "/",
            })
            navigate("/");
        })
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
                href="/signup"
            >
                Sign Up
            </Button>
        </Box>
    )
}

export default LoginForm;