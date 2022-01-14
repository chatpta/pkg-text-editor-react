import React from 'react';
import config from '../config';
import LegalPage from "../pages/legalPage/LegalPage";
import AppBarChatpta from "../sections/header/AppBar/AppBarChatpta";
import Copyright from "../components/Copyright/Copyright";

export default function TermsOfUseView() {

    return (
        <div>
            <AppBarChatpta/>
            <LegalPage textData={ config.legalPage.termsOfUse }/>
            <Copyright sx={ { mt: 8, mb: 0 } }/>
        </div>
    );

};
