module.exports = {
    root: "https://chatpta.ca",
    localRoot: "http://localhost:3001",
    paths: {
        root: "/",
        apiVersion: "/v1",
        users: {
            root: "/auth",
            login: "/login",
            register: "/register",
            recover: "/recover",
            changePassword: "/change-password",
        },
        legal: {
            root: "/legal",
            termsOfUse: "/terms-of-use",
        }
    },
    getSiteUrl: function () {
        return this.root;
    },
    getRootPath: function () {
        return this.paths.root;
    },
    getApiVersion: function () {
        return this.paths.apiVersion;
    },
    getHost: function () {
        return ( process?.env?.NODE_ENV === 'development' ? this.localRoot : this.root );
    },
    getHostApi: function () {
        return this.getHost() + "/api" + this.getApiVersion();
    },
    usersLoginPath: function () {
        return this.paths.users.root + this.paths.users.login;
    },
    usersLoginURL: function () {
        return this.getHostApi() + this.usersLoginPath();
    },
    usersRegisterPath: function () {
        return this.paths.users.root + this.paths.users.register;
    },
    usersRegisterURL: function () {
        return this.getHostApi() + this.usersRegisterPath();
    },
    usersPasswordRecoverPath: function () {
        return this.paths.users.root + this.paths.users.recover;
    },
    usersPasswordRecoverURL: function () {
        return this.getHostApi() + this.usersPasswordRecoverPath();
    },
    usersChangePasswordPath: function () {
        return this.paths.users.root + this.paths.users.changePassword;
    },
    usersChangePasswordURL: function () {
        return this.getHostApi() + this.usersChangePasswordPath();
    },
    legalTermsOfUsePath: function () {
        return this.paths.legal.root + this.paths.legal.termsOfUse;
    },
    legalTermsOfUseUrl: function () {
        return this.getHostApi() + this.paths.legal.termsOfUse;
    },
}
