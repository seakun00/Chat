import React, { useContext } from 'react';
import { Toolbar, Typography } from '@mui/material';
import { useQuery } from 'react-query';
import { Chat, getChat } from '@/ts/http/chat';
import { ChatIdContext } from '@/ts/ChatBookmarks/ChatIdProvider';
import { ChatBookmarkToggleButton } from '@/ts/common/ChatBookmarkToggleButton';

export const ChatHeader = () => {
    const { chatId } = useContext(ChatIdContext);
    const { data } = useQuery<Chat, Error>(['chat', chatId], () => {
        return getChat(chatId);
    });

    return (
        <Toolbar
            sx={{
                minHeight: '45px !important',
                borderBottom: 'solid',
                borderBottomColor: 'lightGrey',
            }}
        >
            {data && (
                <>
                    <Typography
                        variant="subtitle1"
                        component="div"
                        sx={{ flexGrow: 1, fontWeight: 'bold' }}
                    >
                        {data.name}
                    </Typography>
                    <ChatBookmarkToggleButton chatId={chatId} />
                </>
            )}
        </Toolbar>
    );
};
