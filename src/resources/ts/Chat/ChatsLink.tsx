import { Box, Button } from '@mui/material';
import { sub, subHover } from '@/ts/layout/color';
import React from 'react';

export const ChatsLink = () => (
    <Box
        sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
        }}
    >
        <Button
            variant="contained"
            href="/chats"
            sx={{
                backgroundColor: sub,
                '&:hover': {
                    backgroundColor: subHover,
                },
            }}
        >
            チャットを探す
        </Button>
    </Box>
);
