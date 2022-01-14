import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from "react-router-dom";
import { pathAndURL } from "../../../config";

import { handlers } from "./appBarLib";
import StoreConnectUserEdit from "../../../store/storeConnectUserEdit";
import Stack from "@mui/material/Stack";
import Avatar from "@mui/material/Avatar";
import { deepOrange } from "@mui/material/colors";


function AppBarChatptaElement( props ) {
    const { user, userReset, transparent } = props;
    let navigate = useNavigate();
    const handle = handlers();

    function handleLoginClick( event ) {
        event.preventDefault();
        event.stopPropagation();
        navigate( pathAndURL.usersLoginPath() );
    }

    function handleLogoutClick( event ) {
        event.preventDefault();
        event.stopPropagation();

        handle.deleteUserFromLocalStore();
        handle.logoutUser( user, userReset );
        navigate( pathAndURL.getRootPath() );
    }

    function renderButton( handlers ) {
        if ( handlers.isUserLoggedIn( user ) ) {
            return (
                <React.Fragment>
                    <Button
                        color={ transparent ? "primary" : "secondary" }
                        onClick={ handleLogoutClick }
                    >Logout</Button>
                    <Stack direction="row" spacing={ 2 }>
                        <Avatar sx={ {
                            bgcolor: deepOrange[ 500 ],
                        } }>{ user?.name[ 0 ] }</Avatar>
                    </Stack>
                </React.Fragment>
            );
        } else {
            return (
                <Button
                    color={ transparent ? "primary" : "secondary" }
                    onClick={ handleLoginClick }
                >Login</Button>
            );
        }
    }

    return (
        <Box sx={ { flexGrow: 1 } }>
            <AppBar position="static"
                    color={ transparent ? "transparent" : "primary" }
                    elevation={ transparent ? 0 : 10 }>
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color={ transparent ? "primary" : "secondary" }
                        aria-label="menu"
                        sx={ { mr: 2 } }
                    >
                        <MenuIcon/>
                    </IconButton>
                    <Typography variant="h6" component="div" sx={ { flexGrow: 1 } }>

                    </Typography>
                    { renderButton( handle ) }
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default StoreConnectUserEdit( AppBarChatptaElement );
