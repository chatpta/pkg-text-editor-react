import React from "react";
import CreateAccountPage from "../pages/authPages/CreateAccountPage";
import AppBarChatpta from "../sections/header/AppBar/AppBarChatpta";
import Copyright from "../components/Copyright/Copyright";


export default function UserCreateAccountView() {
    return (
        <div>
            <AppBarChatpta/>
            <CreateAccountPage/>
            <Copyright sx={ { mt: 8, mb: 0 } }/>
        </div>
    );
}
