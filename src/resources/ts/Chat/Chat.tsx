import React, { useContext } from 'react';
// import { useQuery } from 'react-query';
// import { Chat as ChatType, getChat } from '@/ts/http/chat';
import { Stack } from '@mui/material';
import { Comments } from '@/ts/Chat/Comments';
import { ChatIdContext } from '@/ts/Home/ChatIdProvider';
import { ChatsLink } from '@/ts/Chat/ChatsLink';

export const Chat = () => {
    const { chatId } = useContext(ChatIdContext);
    if (chatId === undefined) {
        return <ChatsLink />;
    }

    // const chat = useQuery<ChatType, Error>(['chat', chatId], () => {
    //     return getChat(Number(chatId));
    // });

    return (
        <Stack spacing={2} sx={{ height: '100%' }}>
            <Comments />
        </Stack>
    );
};
