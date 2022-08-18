import * as React from "react";
import Logo from "../../assets/images/Logo-transparent.png"
import { 
        AppBar, 
        Box, 
        Container, 
        IconButton, 
        Toolbar,
        List,
        ListItem,
        ListItemButton,
        ListItemIcon,
        SwipeableDrawer,
        ListItemText,
        Typography,
        Avatar,
        Tooltip,
        Menu,
        MenuItem,
        Divider
    } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import ArticleIcon from '@mui/icons-material/Article';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import MessageIcon from '@mui/icons-material/Message';

const Header = ({ pages, settings, login, user = {} }) => {
    const [state, setState] = React.useState(false);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenUserMenu =(event) => {
        setAnchorElUser(event.currentTarget)
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    }; 

    const toggleDrawer = (open) => (event) => {
        if (
            event && 
            event.type === 'keydown' &&
            (event.key === 'Tab' || event.key === 'Shift')
        ) {
            return;
        }

        setState(open)
    };

    if (!login) {
        return (
            <AppBar 
                position="static"
                sx={{
                    backgroundColor: "#000",
                    boxShadow: 0
                }}
            >    
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <Box 
                            component="img"
                            sx={{
                                height: 50,
                                pr: 1
                            }}
                            alt="Logo of Social Site"
                            src={Logo}
                        />
                        <Typography
                            variant="h5"
                            noWrap
                            component="a"
                            href=""
                            sx={{
                            mr: 2,
                            flexGrow: 1,
                            fontFamily: "sans-serif",
                            fontWeight: 700,
                            color: "inherit",
                            textDecoration: "none"
                            }}
                        >
                            Social Site
                        </Typography>

                        <Typography
                            variant="h6"
                            noWrap
                            component="a"
                            href=""
                            sx={{
                            mr: 2,
                            fontFamily: "sans-serif",
                            fontWeight: 200,
                            color: "inherit",
                            textDecoration: "none"
                            }}
                        >
                            Login
                        </Typography>
                    </Toolbar>
                </Container>
            </AppBar>
        )
    }

    return (
            <AppBar 
                position="static"
                sx={{
                    backgroundColor: "#000",
                    boxShadow: 0
                }}
            >    
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ 
                                flexGrow: 1,
                                justifyContent: 'flex-start',
                                display:  { xs: 'flex', sm: 'none' }
                            }}
                            onClick={toggleDrawer(true)}
                        >
                            <MenuIcon />
                        </IconButton>
                        <div>
                            <React.Fragment key='left'>
                                <SwipeableDrawer 
                                    anchor='left'
                                    open={state}
                                    onClose={toggleDrawer(false)}
                                    onOpen={toggleDrawer(true)}
                                >
                                    <Box
                                        sx={{ width: 250 }}
                                        role="presentation"
                                        onClick={toggleDrawer(false)}
                                        onKeyDown={toggleDrawer(false)}
                                    >
                                        <List>
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
                                                    <ListItemButton>
                                                        <ListItemIcon>
                                                            { 
                                                                text === 'Home'
                                                                ? <HomeIcon />
                                                                : text === 'Posts'
                                                                ? <ArticleIcon />
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
                                    </Box>
                                </SwipeableDrawer>
                            </React.Fragment>
                        </div>
                        <Box 
                            component="img"
                            sx={{
                                height: 50,
                                pr: 1
                            }}
                            alt="Logo of Social Site"
                            src={Logo}
                        />
                        <Typography
                            variant="h5"
                            noWrap
                            component="a"
                            href=""
                            sx={{
                            mr: 2,
                            flexGrow: 1,
                            fontFamily: "sans-serif",
                            fontWeight: 700,
                            color: "inherit",
                            textDecoration: "none"
                            }}
                        >
                            Social Site
                        </Typography>

                        {/* Avatar for User */}
                        <Box sx={{ flexGrow: 0 }}>
                            <Tooltip title="Open settings">
                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                <Avatar alt={user.name || "Riley"} src={user.picture || "/static/images/avatar/2.jpg"} />
                            </IconButton>
                            </Tooltip>
                            <Menu
                            sx={{ mt: "45px" }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: "top",
                                horizontal: "right"
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: "top",
                                horizontal: "right"
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                            >
                            {settings.map((setting) => (
                                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                <Typography textAlign="center">{setting}</Typography>
                                </MenuItem>
                            ))}
                            </Menu>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
    )
};

export default Header;