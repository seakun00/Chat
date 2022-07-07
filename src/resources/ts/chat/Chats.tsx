import React from "react";
import {
    CircularProgress,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
} from "@mui/material";
import { useQuery } from "react-query";
import { ChatList, getChats } from "@/ts/http/chat";
import { ErrorAlert } from "@/ts/layout/Error";
import { Pagination } from "@/ts/layout/Pagination";
import { usePagination } from "@/ts/hooks/usePagination";

export const Chats = () => {
    // TODO: クエリパラメータからも初期化できるようにしたい
    const { rows, page, setPage } = usePagination();
    const { data, isLoading } = useQuery<ChatList, Error>(
        ['chats', page],
        () => {
            const offset = rows * (page - 1)
            return getChats(rows, offset)
        }
    );

    if (isLoading) {
        return <CircularProgress />;
    } else if (data) {
        return (
            <>
                <List>
                    {data.chats.map((chat, index) => (
                        <ListItem disablePadding key={index}>
                            <ListItemButton>
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
            </>
        );
    } else {
        return <ErrorAlert />;
    }
};
