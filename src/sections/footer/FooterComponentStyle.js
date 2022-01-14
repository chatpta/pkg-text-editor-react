import { makeStyles } from "@mui/styles";


const useFooterComponentStyle = makeStyles( theme => ( {
    textColor: {
        color: theme.palette.common.white
    },
    noMargin: {
        '& *': {
            margin: 0,
        },
    },
    marginRightExceptLastChild: {
        marginRight: theme.spacing( 2 ),
    },
    upperFooterBox: {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.getContrastText( theme.palette.primary.main ),
        minHeight: 160,
    },
    width: {
        maxWidth: theme.dimensions.fullWidth,
        margin: "auto",
    },
    footerLinks: {
        textAlign: "center",
        padding: theme.spacing( 2 ),
        textDecoration: 'none',
        color: "white",
        fontSize: 16,
        "&:hover": {
            backgroundColor: theme.palette.primary.light,
            transition: "background-color 0.5s ease",
        },
        '@media (min-width: 780px)': {
            textAlign: "left",
            padding: 4,
            fontWeight: 400,
            fontSize: 14,
        }
    },
    footerHeading: {
        marginBottom: theme.spacing( 2 ),
        textTransform: "uppercase",
    },
    lowerFooterBox: {
        backgroundColor: theme.palette.primary.dark,
        color: theme.palette.getContrastText( theme.palette.primary.dark ),
        textAlign: "center",
        paddingTop: theme.spacing( 0.5 ),
    },
    displayFlex: {
        display: "flex",
        justifyContent: "center",
    },
    hideMdBelow: {
        display: "none",
        '@media (min-width: 780px)': {
            display: "block"
        }
    },
    hideMdUp: {
        '@media (min-width: 780px)': {
            display: "none"
        }
    },
    moveLittle: {
        position: "relative",
        top: 4,
    },
    displayFlexMdUp: {
        '@media (min-width: 780px)': {
            display: "flex",
            justifyContent: "space-between",
        }
    },
    containerWidth: {
        '@media (min-width: 780px)': {
            width: "30%",
        }
    },
    padding: {
        '@media (min-width: 780px)': {
            padding: theme.spacing( 4 ),
        }
    },
    socialMedia: {
        display: "flex",
        justifyContent: "space-around",
        padding: theme.spacing( 1 ),
        '@media (min-width: 780px)': {
            marginTop: theme.spacing( 2 ),
            justifyContent: "flex-start",
            paddingLeft: 0,
        }
    },
    paddingZero: {
        padding: 0,
    },
    facebookIcon: {
        color: "#4267B2",
    },
    twitterIcon: {
        color: "#1DA1F2",
    },
    linkedInIcon: {
        color: "#0072b1",
    },
    youTubeIcon: {
        color: "#ff0000"
    }
} ), { index: 1 } );

export default useFooterComponentStyle;

