import React, { useContext } from 'react';
import { Stack } from '@mui/material';
import { Comments } from '@/ts/Chat/Comments';
import { ChatIdContext } from '@/ts/Home/ChatIdProvider';
import { ChatsLink } from '@/ts/Chat/ChatsLink';

export const Chat = () => {
    const { chatId } = useContext(ChatIdContext);
    if (chatId === undefined) {
        return <ChatsLink />;
    } else {
        return (
            <Stack spacing={2} sx={{ height: '100%' }}>
                <Comments />
            </Stack>
        );
    }
};
