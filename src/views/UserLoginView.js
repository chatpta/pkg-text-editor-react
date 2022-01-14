import React from "react";
import LoginPage from "../pages/authPages/LoginPage";
import AppBarChatpta from "../sections/header/AppBar/AppBarChatpta";
import Copyright from "../components/Copyright/Copyright";


export default function UserLoginView() {
    return (
        <div>
            <AppBarChatpta/>
            <LoginPage/>
            <Copyright sx={ { mt: 8, mb: 0 } }/>
        </div>
    );
}
