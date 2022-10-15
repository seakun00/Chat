import React, { useState } from 'react';
import { Grid, Stack } from '@mui/material';
import { useQuery } from 'react-query';
import { Chat, getChats } from '@/ts/http/chat';
import { ErrorAlert } from '@/ts/layout/ErrorAlert';
import { SearchBar } from '@/ts/Chats/SearchBar';
import { ChatList } from '@/ts/Chats/ChatList';
import { ChatCreateButton } from '@/ts/Chats/ChatCreateButton';
import { ChatCreateDialog } from '@/ts/Chats/ChatCreateDialog';

export const Chats = () => {
    const rows = 20;
    const [offset, setOffset] = useState(0);
    const [name, setName] = useState('');
    const [chats, setChats] = useState<Chat[]>([]);
    const { isLoading, isError } = useQuery<Chat[], Error>(
        ['chats', offset, name],
        () => {
            return getChats(rows, offset, name);
        },
        {
            onSuccess: (data) => {
                const removeDuplicate = (fetchedChats: Chat[]): Chat[] =>
                    fetchedChats.filter((fetchedChat) => {
                        const isRegistered = chats.some((chat) => {
                            return chat.id === fetchedChat.id;
                        });
                        return !isRegistered;
                    });

                const fetchedChats = removeDuplicate(data);
                setChats([...chats, ...fetchedChats]);
            },
        }
    );

    const [isOpenDialog, setIsOpenDialog] = useState(false);
    const openChatCreateDialog = () => setIsOpenDialog(true);
    const closeChatCreateDialog = () => setIsOpenDialog(false);

    if (isError) {
        return <ErrorAlert />;
    } else {
        return (
            <Stack sx={{ height: '100%' }}>
                <Grid
                    container
                    alignItems="center"
                    textAlign="center"
                    columns={15}
                >
                    <Grid item xs={14} sx={{ py: 2, pl: 2 }}>
                        <SearchBar
                            setName={setName}
                            setOffset={setOffset}
                            setChats={setChats}
                        />
                    </Grid>
                    <Grid item xs={1} sx={{ py: 2, px: 1 }}>
                        <ChatCreateButton openDialog={openChatCreateDialog} />
                    </Grid>
                </Grid>
                <ChatList
                    rows={rows}
                    offset={offset}
                    setOffset={setOffset}
                    isLoading={isLoading}
                    chats={chats}
                />
                <ChatCreateDialog
                    isOpen={isOpenDialog}
                    closeDialog={closeChatCreateDialog}
                />
            </Stack>
        );
    }
};
