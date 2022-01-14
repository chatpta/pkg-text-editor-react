import * as React from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import { Link } from "react-router-dom";
import { pathAndURL } from "../../../config";

export default function RecordExistErrorAlert() {
    return (
        <Stack sx={ { width: '100%', marginTop: "16px", marginBottom: "8px" } } spacing={ 2 }>
            <Alert severity="info">
                Account exist by this email
                <strong>
                    <Link to={ pathAndURL.usersPasswordRecoverPath() }
                          style={ { textDecoration: 'none', color: "black", fontSize: 16 } }>
                        { " Recover password." }
                    </Link>
                </strong>
            </Alert>
        </Stack>
    );
}
