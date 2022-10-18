import { mainHover } from '@/ts/common/color';
import { ListItem, ListItemButton, ListItemText } from '@mui/material';
import React, { useContext } from 'react';
import { ChatBookmarkContext } from '@/ts/ChatBookmarks/ChatBookmarkProvider';
import { Loading } from '@/ts/common/Loading';
import { ChatIdContext } from '@/ts/ChatBookmarks/ChatIdProvider';
import { ErrorAlert } from '@/ts/common/ErrorAlert';

export const ChatBookmarkList = () => {
    const { chatId } = useContext(ChatIdContext);
    const { isLoading, data } = useContext(ChatBookmarkContext);

    if (isLoading) {
        return <Loading />;
    } else if (data) {
        return (
            <>
                {data.map((chatBookmark) => (
                    <ListItem
                        key={chatBookmark.id}
                        disablePadding
                        dense
                        sx={[
                            chatBookmark.chat_id === chatId && {
                                backgroundColor: 'cornflowerblue',
                            },
                            {
                                '&:hover': {
                                    backgroundColor: mainHover,
                                },
                            },
                        ]}
                    >
                        <ListItemButton href={`/chats/${chatBookmark.chat_id}`}>
                            <ListItemText
                                primary={chatBookmark.name}
                                primaryTypographyProps={{
                                    sx: {
                                        fontSize: '15px',
                                        fontWeight: 'bold',
                                    },
                                }}
                            />
                        </ListItemButton>
                    </ListItem>
                ))}
            </>
        );
    } else {
        return <ErrorAlert />;
    }
};
