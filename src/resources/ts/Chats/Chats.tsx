import React, { useState } from 'react';
import { Stack } from '@mui/material';
import { useQuery } from 'react-query';
import { Chat, getChats } from '@/ts/http/chat';
import { ErrorAlert } from '@/ts/layout/Error';
import { SearchBar } from '@/ts/Chats/SearchBar';
import { ChatList } from '@/ts/Chats/ChatList';

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

    if (isError) {
        return <ErrorAlert />;
    } else {
        return (
            <Stack spacing={2} sx={{ height: '100%' }}>
                <SearchBar
                    setName={setName}
                    setOffset={setOffset}
                    setChats={setChats}
                />
                <ChatList
                    rows={rows}
                    offset={offset}
                    setOffset={setOffset}
                    isLoading={isLoading}
                    chats={chats}
                />
            </Stack>
        );
    }
};
