import * as React from "react";
import { 
    Paper,
    Typography,
    Divider,
    ListItem,
    ListItemButton,
    ListItemIcon,
    List,
    ListItemText
} from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import MessageIcon from '@mui/icons-material/Message';
import { useNavigate } from "react-router-dom";

const Menu = ({ pages, token, currentUserId }) => {
    const navigate = useNavigate();

    const logined = token && currentUserId ? "true" : "false";

    if (logined === "true") {
        return (
            <Paper
                sx={{
                    boxShadow: 5,
                    display: { xs: "none", sm: "flex" }
                }}
            >
                <List sx={{ width: "100%" }} >
                    <Typography
                        variant="h7"
                        noWrap
                        component="p"
                        href=""
                        sx={{
                            pt: 1,
                            pl: 2,
                            pb: 1,
                            fontFamily: "sans-serif",
                            fontWeight: 700,
                            color: "inherit",
                            textDecoration: "none"
                        }}
                    >
                        MENU
                    </Typography>
                    <Divider />
                    {pages.map((text) => (
                        <ListItem key={text} disablePadding>
                            <ListItemButton
                                onClick={() => {
                                        text === 'Home'
                                        ? navigate("/")
                                        : text === 'Profile'
                                        ? navigate(`/users/${currentUserId}`)
                                        : text === 'Friends'
                                        ? navigate('/')
                                        : navigate('/')
                                    }}
                            >
                                <ListItemIcon>
                                    { 
                                        text === 'Home'
                                        ? <HomeIcon />
                                        : text === 'Profile'
                                        ? <AccountBoxIcon />
                                        : text === 'Friends'
                                        ? <PeopleAltIcon />
                                        : <MessageIcon />
                                    }
                                </ListItemIcon>
                                <ListItemText primary={text} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </Paper>
        )
    } return ("")
}

export default Menu;