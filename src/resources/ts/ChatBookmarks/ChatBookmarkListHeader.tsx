import {
    IconButton,
    ListItem,
    ListItemText,
    ListSubheader,
} from '@mui/material';
import { main } from '@/ts/layout/color';
import SearchIcon from '@mui/icons-material/Search';
import React from 'react';

export const ChatBookmarkListHeader = () => (
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
