import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
function ButtonComp() {
    return (
      <Stack spacing={2} direction="row">
        <Button variant="outlined">کلیک کنید</Button>
      </Stack>
    );
  }

export {ButtonComp}