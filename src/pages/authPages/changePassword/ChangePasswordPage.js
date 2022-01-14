import StoreConnectUserEdit from "../../../store/storeConnectUserEdit";
import React from 'react';
import { useEffect } from "react";
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Link, useNavigate } from "react-router-dom";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

import { pathAndURL } from "../../../config";
import { handlers } from "./changePasswordLib";
import useCreateLoginElementStyle from "../lib/authStyle";


function LoginElement( props ) {
    const { user, userFetch, userMutate, userReset } = props;
    const handle = handlers( user, userMutate, userFetch, userReset );
    let navigate = useNavigate();

    const classes = useCreateLoginElementStyle();


    useEffect( () => {
            if ( user?.jwt && user?.pending === false ) {
                userReset( { status: "logged in", jwt: user?.jwt } );
                navigate( "/" );
            }
        }, [ user?.pending, userReset, user?.jwt, navigate, user ]
    );

    return (
        <div className={ classes.container }>
            <Container component="main" maxWidth="sm">
                <Box className={ classes.formBox }>
                    <Avatar sx={ { m: 1, bgcolor: 'secondary.main' } }>
                        <LockOutlinedIcon/>
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Change password
                    </Typography>
                    <Box
                        component="form"
                        noValidate sx={ { mt: 1 } }
                        className={ classes.form }
                    >
                        <TextField
                            id="password"
                            name="password"
                            margin="normal"
                            label="Password"
                            type="password"
                            required
                            autoFocus
                            fullWidth
                            value={ user?.password || "" }
                            onChange={ handle.passwordChange }
                        />
                        <TextField
                            id="password_confirm"
                            name="password_confirm"
                            margin="normal"
                            label="Password Confirm"
                            type="password"
                            required
                            fullWidth
                            value={ user?.password_confirm || "" }
                            onChange={ handle.passwordConfirmChange }
                        />
                        <Button
                            style={ { marginTop: 8 } }
                            fullWidth
                            type="submit"
                            variant="contained"
                            size={ "large" }
                            sx={ { mt: 3, mb: 2 } }
                            onClick={ handle.clickChangePassword }
                        >
                            Send
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
