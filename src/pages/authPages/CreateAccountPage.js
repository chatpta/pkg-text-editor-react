import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import FormControlLabel from "@mui/material/FormControlLabel";

import lib from "./lib";
import { pathAndURL } from "../../config";
import useCreateAccountElementStyle from "./lib/authStyle";
import storeConnect from "../../store/storeConnectUserEdit";


function CreateAccountPage( props ) {
    const { user, userFetch, userMutate, userReset } = props;
    let navigate = useNavigate();
    const handle = lib.authLib.handlers( user, userMutate, userFetch, userReset );
    const classes = useCreateAccountElementStyle();
    const [ agree, setAgree ] = React.useState( false );
    const [ submit, setSubmit ] = React.useState( false );
    const [ error, setError ] = React.useState( {
        name: false,
        email: false,
        password: false
    } );


    const handleAgreeChange = ( event ) => {
        setSubmit( false )
        setAgree( event.target.checked );
    };

    function agreeToTermsAndConditionLabel() {
        return (
            <div>
                <span>I accept the </span>
                <Link to={ pathAndURL.legalTermsOfUsePath() }
                      style={ { color: "black" } }>
                    terms of use
                </Link>
                <span> and </span>
                <Link to={ pathAndURL.legalTermsOfUsePath() }
                      style={ { color: "black" } }>
                    privacy policy.</Link>
            </div>
        );
    }

    useEffect( () => {
            if ( handle.isUserLoggedIn( user ) ) {
                navigate( "/", { replace: true } );
            } else if ( user?.message === "account created" && user?.pending === false ) {
                userReset( { status: "account created" } );
                navigate( pathAndURL.usersLoginPath(), { replace: true } );
            }
        }, [ user, user?.pending, user?.message, userReset, navigate, handle ]
    );

    return (
        <div className={ classes.container }>
            <Container component="main" maxWidth="sm">
                <Box className={ classes.formBox }>
                    <Avatar sx={ { m: 1, bgcolor: 'secondary.main' } }>
                        <LockOutlinedIcon/>
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Create account
                    </Typography>

                    { handle.showRecordExistError( user ) || "" }

                    { handle.showAgreeToTermsAndConditions( submit, agree ) || "" }

                    <Box
                        component="form"
                        noValidate sx={ { mt: 1 } }
                        className={ classes.form }
                    >
                        <TextField
                            id="first_name"
                            name="first_name"
                            margin="normal"
                            label="Name"
                            required
                            fullWidth
                            autoFocus
                            value={ user?.first_name || "" }
                            onChange={ handle.firstNameChangeCreateUser( error, setError ) }
                            onBlur={ handle.handleNameBlur( error, setError ) }
                            error={ error?.name }
                            helperText={ error?.name ? "Must be present." : "" }
                        />
                        <TextField
                            id="email"
                            name="email"
                            margin="normal"
                            label="Email"
                            autoComplete="email"
                            required
                            fullWidth
                            value={ user?.email || "" }
                            onChange={ handle.emailChangeCreateUser( error, setError ) }
                            onBlur={ handle.handleEmailBlur( error, setError ) }
                            error={ error?.email }
                            helperText={ error?.email ? "Email format not correct." : "" }
                        />
                        <TextField
                            id="password"
                            name="password"
                            label="Password"
                            margin="normal"
                            type="password"
                            autoComplete="current-password"
                            required
                            fullWidth
                            value={ user?.password || "" }
                            onChange={ handle.passwordChangeCreateUser( error, setError ) }
                            onBlur={ handle.handlePasswordBlur( error, setError ) }
                            error={ error?.password }
                            helperText={ error?.password ? "Characters, number and special character [*#$%^...]." : "" }
                        />
                        <div style={ { display: "flex", justifyContent: "center" } }>
                            <FormControlLabel
                                control={ <Checkbox value="remember" color="primary"/> }
                                label={ agreeToTermsAndConditionLabel() }
                                checked={ agree }
                                onChange={ handleAgreeChange }
                            />
                        </div>
                        <Button
                            style={ { marginTop: 8 } }
                            fullWidth
                            type="submit"
                            variant="contained"
                            size={ "large" }
                            sx={ { mt: 3, mb: 2 } }
                            onClick={ handle.clickCreateUser( userReset, agree, setSubmit, error ) }
                        >
                            Send
                        </Button>
                        <Grid container>
                            <Grid item>
                                <Link to={ pathAndURL.usersLoginPath() }
                                      style={ { textDecoration: 'none', color: "black", fontSize: 16 } }>
                                    { "Already have account? Sign in" }
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Container>
        </div>
    );
}

export default storeConnect( CreateAccountPage );
