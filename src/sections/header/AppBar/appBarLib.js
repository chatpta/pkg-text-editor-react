function handlers() {

    const deleteUserFromLocalStore = () => {
        localStorage.removeItem( "user" );
    }

    const logoutUser = ( user, userReset ) => {

        if ( user?.loggedIn ) {
            userReset( {} );
            return true;
        }

        return false;
    };

    const isUserLoggedIn = ( user ) => {
        return user?.loggedIn;
    };

    return {
        deleteUserFromLocalStore,
        logoutUser,
        isUserLoggedIn
    };
}

export { handlers };


