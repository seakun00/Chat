import { Chat } from '@/ts/http/chat';
import React, { KeyboardEvent } from 'react';
import { TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

type SearchBarProps = {
    setName: (name: string) => void;
    setOffset: (offset: number) => void;
    setChats: (chats: Chat[]) => void;
};

export const SearchBar = (props: SearchBarProps) => {
    const { setName, setOffset, setChats } = props;

    const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter' && event.target instanceof HTMLInputElement) {
            setName(event.target.value);
            setOffset(0);
            setChats([]);
        }
    };

    return (
        <TextField
            variant="standard"
            margin="normal"
            InputProps={{
                startAdornment: <SearchIcon />,
            }}
            onKeyDown={handleKeyDown}
        />
    );
};
