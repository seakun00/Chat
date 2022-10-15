import React, { useContext } from 'react';
import { Loading } from '@/ts/layout/Loading';
import {
    IconButton,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    ListSubheader,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { ErrorAlert } from '@/ts/layout/ErrorAlert';
import { ChatIdContext } from '@/ts/ChatBookmarks/ChatIdProvider';
import { main } from '@/ts/layout/color';
import { ChatBookmarkContext } from '@/ts/ChatBookmarks/ChatBookmarkProvider';

export const ChatBookmarks = () => {
    const { chatId } = useContext(ChatIdContext);
    const { isLoading, data } = useContext(ChatBookmarkContext);

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
                            chatBookmark.chat_id === chatId && {
                                backgroundColor: 'cornflowerblue',
                            },
                        ]}
                    >
                        <ListItemButton href={`/${chatBookmark.chat_id}`}>
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
            component="div"
            secondaryAction={
                <IconButton edge="end" href="/chats">
                    <SearchIcon
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
