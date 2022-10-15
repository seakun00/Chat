import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    TextField,
} from '@mui/material';
import React from 'react';
import { sub, subHover } from '@/ts/layout/color';

type ChatCreateDialogProps = {
    isOpen: boolean;
    closeDialog: () => void;
};

export const ChatCreateDialog = (props: ChatCreateDialogProps) => {
    const handleChatCreateButton = () => {
        console.log('作成した');
    };

    return (
        <Dialog
            onClose={props.closeDialog}
            open={props.isOpen}
            maxWidth="sm"
            fullWidth
        >
            <DialogTitle>チャットを作成する</DialogTitle>
            <DialogContent>
                <TextField
                    autoFocus
                    name="name"
                    label="チャット名"
                    margin="dense"
                    fullWidth
                />
            </DialogContent>
            <DialogActions>
                <Button
                    onClick={props.closeDialog}
                    variant="outlined"
                    color="inherit"
                >
                    戻る
                </Button>
                <Button
                    onClick={handleChatCreateButton}
                    variant="outlined"
                    sx={{
                        color: 'white',
                        backgroundColor: sub,
                        '&:hover': {
                            backgroundColor: subHover,
                        },
                    }}
                >
                    作成する
                </Button>
            </DialogActions>
        </Dialog>
    );
};
