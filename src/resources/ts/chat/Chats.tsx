import React, { KeyboardEvent, useState } from "react";
import {
    List as BaseList,
    ListItem,
    ListItemButton,
    ListItemText,
    Stack,
    TextField,
    TextFieldProps,
} from "@mui/material";
import { useQuery } from "react-query";
import { ChatList, getChats } from "@/ts/http/chat";
import { ErrorAlert } from "@/ts/layout/Error";
import { Pagination } from "@/ts/layout/Pagination";
import { usePagination } from "@/ts/hooks/usePagination";
import { Loading } from "@/ts/layout/Loading";
import SearchIcon from '@mui/icons-material/Search';

export const Chats = () => {
    const [name, setName] = useState<string>();
    const handleSearch = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter' && event.target instanceof HTMLInputElement) {
            setName(event.target.value)
        }
    }

    return (
        <Stack justifyContent="center" alignItems="center" spacing={2}>
            <SearchBar onKeyDown={handleSearch} />
            <List name={name} />
        </Stack>
    );
};

const SearchBar = (props: TextFieldProps) => (
    <TextField
        {...props}
        variant="standard"
        margin="normal"
        InputProps={{
            startAdornment: <SearchIcon />
        }}
    />
);

const List = (props: {name?: string}) => {
    const { rows, page, setPage } = usePagination();
    const { isLoading, data } = useQuery<ChatList, Error>(
        ['chats', page, props.name],
        () => {
            const offset = rows * (page - 1)
            return getChats(rows, offset, props.name)
        }
    );

    if (isLoading) {
        return <Loading />;
    } else if (data) {
        return (
            <>
                <BaseList>
                    {data.chats.map((chat, index) => (
                        <ListItem disablePadding key={index}>
                            <ListItemButton component="a" href={`/chats/${chat.id}`}>
                                <ListItemText primary={chat.name} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </BaseList>
                <Pagination
                    total={data.count}
                    rows={rows}
                    page={page}
                    onChangePage={setPage}
                />
            </>
        )
    } else {
        return <ErrorAlert />;
    }
}
