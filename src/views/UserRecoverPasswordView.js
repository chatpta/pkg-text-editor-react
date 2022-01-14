import React from "react";
import RecoverPage from "../pages/authPages/RecoverPage";
import AppBarChatpta from "../sections/header/AppBar/AppBarChatpta";
import Copyright from "../components/Copyright/Copyright";


export default function UserRecoverPasswordView() {
    return (
        <div>
            <AppBarChatpta/>
            <RecoverPage/>
            <Copyright sx={ { mt: 8, mb: 0 } }/>
        </div>
    );
}
