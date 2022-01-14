import React from "react";
import ChangePasswordPage from "../pages/authPages/changePassword/ChangePasswordPage";
import Copyright from "../components/Copyright/Copyright";
import AppBarChatpta from "../sections/header/AppBar/AppBarChatpta";


export default function UserChangePasswordView() {
    return (
        <div>
            <AppBarChatpta/>
            <ChangePasswordPage/>
            <Copyright sx={ { mt: 8, mb: 0 } }/>
        </div>
    );
}
