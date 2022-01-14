import React from "react";
import LandingPage from "../pages/landingPage/land/LandingPage";
import AppBarChatpta from "../sections/header/AppBar/AppBarChatpta";

export default function HomePageView() {
    return (
        <div>
            <AppBarChatpta transparent/>
            <LandingPage/>
        </div>
    );
}
