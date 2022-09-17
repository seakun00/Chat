import React, { useContext } from 'react';
import { useQuery } from 'react-query';
import { ChatBookmark, getChatBookmarks } from '@/ts/http/chatBookmarks';
import { Loading } from '@/ts/layout/Loading';
import {
    IconButton,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    ListSubheader,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { ErrorAlert } from '@/ts/layout/Error';
import { ChatIdContext } from '@/ts/Home/ChatIdProvider';
import { main } from '@/ts/layout/color';

export const ChatBookmarks = () => {
    const { isLoading, data } = useQuery<ChatBookmark[], Error>(
        'chat_bookmarks',
        getChatBookmarks
    );
    const { chatId, setChatId } = useContext(ChatIdContext);

    if (isLoading) {
        return <Loading />;
    } else if (data) {
        return (
            <List>
                <ListHeader />
                {data.map((chatBookmark) => (
                    <ListItem
                        key={chatBookmark.id}
                        disablePadding
                        dense
                        sx={[
                            chatBookmark.id === chatId && {
                                backgroundColor: 'cornflowerblue',
                            },
                        ]}
                    >
                        <ListItemButton
                            onClick={() => setChatId(chatBookmark.chat_id)}
                        >
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
            </List>
        );
    } else {
        return <ErrorAlert />;
    }
};

const ListHeader = () => (
    <ListSubheader
        sx={{
            height: '40px',
            color: 'lightgray',
            backgroundColor: main,
            fontSize: '15px',
            fontWeight: 'bold',
        }}
    >
        <ListItem
            secondaryAction={
                <IconButton edge="end" href="/chats">
                    <AddIcon
                        sx={{
                            color: 'lightgray',
                        }}
                    />
                </IconButton>
            }
            disableGutters
        >
            <ListItemText primary="ブックマーク" />
        </ListItem>
    </ListSubheader>
);
