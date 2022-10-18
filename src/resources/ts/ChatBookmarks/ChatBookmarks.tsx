import React from 'react';
import { List } from '@mui/material';
import { main } from '@/ts/layout/color';
import { ChatBookmarkListHeader } from '@/ts/ChatBookmarks/ChatBookmarkListHeader';
import { ChatBookmarkList } from '@/ts/ChatBookmarks/ChatBookmarkList';

export const ChatBookmarks = () => (
    <List
        sx={{
            height: '100%',
            backgroundColor: main,
            color: 'white',
        }}
    >
        <ChatBookmarkListHeader />
        <ChatBookmarkList />
    </List>
);
