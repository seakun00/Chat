import {
    IconButton,
    ListItem,
    ListItemText,
    ListSubheader,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import React from 'react';
import { main, mainHover } from '@/ts/common/color';

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
            secondaryAction={
                <IconButton
                    edge="end"
                    href="/chats"
                    sx={{
                        color: 'lightgray',
                        '&:hover': {
                            backgroundColor: mainHover,
                        },
                    }}
                >
                    <SearchIcon />
                </IconButton>
            }
            disableGutters
        >
            <ListItemText primary="ブックマーク" />
        </ListItem>
    </ListSubheader>
);
