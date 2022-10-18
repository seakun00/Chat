import {
    ClickAwayListener,
    IconButton,
    ListItem,
    ListItemButton,
    ListItemText,
    Tooltip,
} from '@mui/material';
import { Link } from 'react-router-dom';
import { mainHover, selected, tooltip } from '@/ts/common/color';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import React, { useState } from 'react';

export const ChatBookmarkListHeaderMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleTooltipClose = () => {
        setIsOpen(false);
    };

    const handleTooltipOpen = () => {
        setIsOpen(true);
    };

    return (
        <ClickAwayListener onClickAway={handleTooltipClose}>
            <Tooltip
                onClose={handleTooltipClose}
                open={isOpen}
                disableFocusListener
                disableHoverListener
                disableTouchListener
                placement="right"
                title={
                    <ListItem component="div" disableGutters>
                        <ListItemButton
                            component={Link}
                            to="/chats"
                            dense
                            sx={{
                                '&:hover': {
                                    color: 'white',
                                    backgroundColor: selected,
                                },
                            }}
                        >
                            <ListItemText primary="チャットを検索する" />
                        </ListItemButton>
                    </ListItem>
                }
                PopperProps={{
                    sx: {
                        '& .MuiTooltip-tooltip': {
                            padding: 0,
                            color: 'black',
                            backgroundColor: tooltip,
                        },
                    },
                }}
            >
                <IconButton
                    edge="end"
                    onClick={handleTooltipOpen}
                    sx={{
                        color: 'lightgray',
                        '&:hover': {
                            backgroundColor: mainHover,
                        },
                    }}
                >
                    <MoreVertIcon />
                </IconButton>
            </Tooltip>
        </ClickAwayListener>
    );
};
