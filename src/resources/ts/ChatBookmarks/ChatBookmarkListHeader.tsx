import { ListItem, ListItemText, ListSubheader } from '@mui/material';
import React from 'react';
import { main } from '@/ts/common/color';
import { ChatBookmarkListHeaderMenu } from '@/ts/ChatBookmarks/ChatBookmarkListHeaderMenu';

export const ChatBookmarkListHeader = () => (
    <ListSubheader
        color="primary"
        sx={{
            color: 'lightgray',
            backgroundColor: main,
            fontSize: '15px',
            fontWeight: 'bold',
        }}
    >
        <ListItem
            component="div"
            secondaryAction={<ChatBookmarkListHeaderMenu />}
            disableGutters
        >
            <ListItemText primary="ブックマーク" />
        </ListItem>
    </ListSubheader>
);
