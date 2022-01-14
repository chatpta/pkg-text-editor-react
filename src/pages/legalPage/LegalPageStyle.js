import { makeStyles } from "@mui/styles";

const useLegalPageStyle = makeStyles( theme => ( {
    root: {
        minHeight: '70vh',
        maxWidth: 700,
        margin: "auto",
    },
    headline: {
        paddingTop: theme.spacing(8),
        margin: 0,
    }
} ) );

export default useLegalPageStyle;
