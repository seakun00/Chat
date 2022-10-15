import { IconButton } from '@mui/material';
import React from 'react';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { sub } from '@/ts/layout/color';

type ChatCreateButtonProps = {
    openDialog: () => void;
};

export const ChatCreateButton = (props: ChatCreateButtonProps) => (
    <IconButton onClick={props.openDialog}>
        <AddCircleIcon
            fontSize="large"
            sx={{
                color: sub,
            }}
        />
    </IconButton>
);
