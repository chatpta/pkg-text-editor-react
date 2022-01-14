import * as React from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

export default function AgreeToTermsAndConditions() {
    return (
        <Stack sx={ { width: '100%', marginTop: "16px", marginBottom: "8px" } } spacing={ 2 }>
            <Alert severity="error">
                Please agree to the <strong>terms and conditions.</strong>
            </Alert>
        </Stack>
    );
}
