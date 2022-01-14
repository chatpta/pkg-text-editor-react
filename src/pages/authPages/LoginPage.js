import StoreConnectUserEdit from "../../store/storeConnectUserEdit";
import React from 'react';
import { useEffect } from "react";
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Link, useNavigate } from "react-router-dom";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

import { pathAndURL } from "../../config";
import lib from "./lib";
import useCreateLoginElementStyle from "./lib/authStyle";


function LoginElement( props ) {
    const { user, userFetch, userMutate, userReset } = props;
    const [ rememberMe, setRememberMe ] = React.useState( false )

    let navigate = useNavigate();
    const handle = lib.authLib.handlers( user, userMutate, userFetch, userReset );
    const classes = useCreateLoginElementStyle();

    const handleRememberMeChange = ( event ) => {
        setRememberMe( event.target.checked );
    };

    useEffect( () => {
            if ( handle.logInUser( user, userReset ) ) {

                handle.saveUserInLocalStore( user, rememberMe );
                navigate( "/", { replace: true } );

            } else if ( handle.isUserLoggedIn( user ) ) {

                handle.deleteUserFromLocalStore();
                navigate( "/", { replace: true } );

            }
        }, [ user, handle, navigate, userReset, rememberMe ]
    );

    return (
        <div className={ classes.container }>
            <Container component="main" maxWidth="sm">
                <Box className={ classes.formBox }>
                    <Avatar sx={ { m: 1, bgcolor: 'secondary.main' } }>
                        <LockOutlinedIcon/>
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign in
                    </Typography>

                    { handle.showLoginErrorAlert( user ) || "" }

                    <Box
                        component="form"
                        noValidate sx={ { mt: 1 } }
                        className={ classes.form }
                    >
                        <TextField
                            id="email"
                            name="email"
                            margin="normal"
                            label="Email"
                            autoComplete="email"
                            required
                            autoFocus
                            fullWidth
                            value={ user?.email || "" }
                            onChange={ handle.emailChangeLogin }
                        />
                        <TextField
                            id="password"
                            name="password"
                            margin="normal"
                            label="Password"
                            type="password"
                            autoComplete="current-password"
                            required
                            fullWidth
                            value={ user?.password || "" }
                            onChange={ handle.passwordChangeLogin }
                        />
                        <div style={ { display: "flex", justifyContent: "center" } }>
                            <FormControlLabel
                                control={ <Checkbox value="remember" color="primary"/> }
                                label="Remember me"
                                checked={ rememberMe }
                                onChange={ handleRememberMeChange }
                            />
                        </div>
                        <Button
                            style={ { marginTop: 8 } }
                            fullWidth
                            type="submit"
                            variant="contained"
                            size={ "large" }
                            sx={ { mt: 3, mb: 2 } }
                            onClick={ handle.clickLoginUser( userMutate ) }
                        >
                            Sign In
                        </Button>
                        <Grid container>
                            <Grid item xs>
                                <Link to={ pathAndURL.usersPasswordRecoverPath() }
                                      style={ { textDecoration: 'none', color: "black", fontSize: 16 } }>
                                    Forgot password?
                                </Link>
                            </Grid>
                            <Grid item>
                                <Link to={ pathAndURL.usersRegisterPath() }
                                      style={ { textDecoration: 'none', color: "black", fontSize: 16 } }>
                                    { "Don't have an account? Sign Up" }
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Container>
        </div>
    );
}

export default StoreConnectUserEdit( LoginElement );
