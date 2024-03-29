import {
    Alert,
    Button,
    DialogActions,
    DialogContent,
    DialogTitle,
    TextField,
} from '@mui/material';
import React, { useState } from 'react';
import { sub, subHover } from '@/ts/common/color';
import { Controller, useForm } from 'react-hook-form';
import { createChat } from '@/ts/http/chat';
import { ValidationError } from '@/ts/http/error/ValidationError';
import { Dialog } from '@/ts/common/Dialog';
import { useNavigate } from 'react-router-dom';

type ChatCreateDialogProps = {
    isOpen: boolean;
    closeDialog: () => void;
};

type FormInputs = {
    name: string;
};

export const ChatCreateDialog = (props: ChatCreateDialogProps) => {
    const {
        control,
        handleSubmit,
        setError,
        formState: { errors, isSubmitting },
    } = useForm<FormInputs>({
        defaultValues: {
            name: '',
        },
    });
    const navigate = useNavigate();
    const [isInternalServerError, setIsInternalServerError] = useState(false);

    const onSubmit = (formInputs: FormInputs) => {
        setIsInternalServerError(false);
        return createChat(formInputs.name)
            .then((chat) => {
                return navigate(`/chats/${chat.id}`);
            })
            .catch((error) => {
                if (error instanceof ValidationError) {
                    for (const key in error.userMessages) {
                        if (key === 'name') {
                            setError(key, {
                                type: 'server',
                                message: error.userMessages[key],
                            });
                        }
                    }
                } else {
                    setIsInternalServerError(true);
                }
            });
    };

    return (
        <Dialog
            isLoading={isSubmitting}
            onClose={props.closeDialog}
            open={props.isOpen}
            maxWidth="sm"
            fullWidth
        >
            <DialogTitle>チャットを作成する</DialogTitle>
            {isInternalServerError && (
                <Alert severity="error">サーバーで問題が発生しました</Alert>
            )}
            <form onSubmit={handleSubmit(onSubmit)}>
                <DialogContent>
                    <Controller
                        name="name"
                        control={control}
                        render={({ field }) => (
                            <TextField
                                {...field}
                                autoFocus
                                label="チャット名"
                                margin="dense"
                                fullWidth
                                error={!!errors.name}
                                helperText={errors.name?.message}
                            />
                        )}
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
                        type="submit"
                        variant="outlined"
                        disabled={isSubmitting}
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
            </form>
        </Dialog>
    );
};
