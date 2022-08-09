import React from "react";
import {
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    Stack,
} from "@mui/material";
import { useQuery } from "react-query";
import { ChatList, getChats } from "@/ts/http/chat";
import { ErrorAlert } from "@/ts/layout/Error";
import { Pagination } from "@/ts/layout/Pagination";
import { usePagination } from "@/ts/hooks/usePagination";
import { Loading } from "@/ts/layout/Loading";

export const Chats = () => {
    const { rows, page, setPage } = usePagination();
    const { data, isLoading } = useQuery<ChatList, Error>(
        ['chats', page],
        () => {
            const offset = rows * (page - 1)
            return getChats(rows, offset)
        }
    );

    if (isLoading) {
        return <Loading />;
    } else if (data) {
        return (
            <Stack justifyContent="center" alignItems="center" spacing={2}>
                <List>
                    {data.chats.map((chat, index) => (
                        <ListItem disablePadding key={index}>
                            <ListItemButton component="a" href={`/chats/${chat.id}`}>
                                <ListItemText primary={chat.name} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
                <Pagination
                    total={data.count}
                    rows={rows}
                    page={page}
                    onChangePage={setPage}
                />
            </Stack>
        );
    } else {
        return <ErrorAlert />;
    }
};
