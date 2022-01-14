import * as React from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

export default function RecoverPasswordSendSuccessAlert() {
    return (
        <Stack sx={{ width: '100%', marginTop: "16px", marginBottom: "8px" }} spacing={2}>
            <Alert severity="success">
                Please check you email and <strong>spam folder too.</strong>
            </Alert>
        </Stack>
    );
}
