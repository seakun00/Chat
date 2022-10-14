import React from 'react';
import { Stack } from '@mui/material';
import { Comments } from '@/ts/Chat/Comments';
import { ChatHeader } from '@/ts/Chat/ChatHeader';

export const Chat = () => (
    <Stack sx={{ height: '100%' }}>
        <ChatHeader />
        <Comments />
    </Stack>
);
