import React from 'react';
import { Stack } from '@mui/material';
import { Comments } from '@/ts/Chat/Comments';

export const Chat = () => (
    <Stack spacing={2} sx={{ height: '100%' }}>
        <Comments />
    </Stack>
);
