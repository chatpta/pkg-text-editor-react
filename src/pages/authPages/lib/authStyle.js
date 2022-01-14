import { makeStyles } from "@mui/styles";

const useAuthStyle = makeStyles( theme => ( {
    container: () => ( {
        paddingTop: theme.spacing( 2 ),
        '@media (min-width: 500px)': {
            paddingTop: theme.spacing( 8 ),
        },
    } ),
    formBox: () => ( {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        borderRadius: theme.dimensions.borderRadius,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing( 2 ),

        '@media (min-width: 500px)': {
            boxShadow: theme.shadows[ 10 ],
        },
    } ),
    form: () => ( {
        width: "100%",
    } ),
} ), { index: 1 } );

export default useAuthStyle;
