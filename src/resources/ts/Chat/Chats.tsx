import React from "react";
import {
    CircularProgress,
    List,
    ListItem,
    ListItemButton,
    ListItemText
} from "@mui/material";
import { useQuery } from "react-query";
import { Chat, getChats } from "@/ts/http/chat";
import { ErrorAlert } from "@/ts/layout/Error";

export const Chats = () => {
    const { data, isLoading } = useQuery<Chat[], Error>('chats', getChats);

    if (isLoading) return <CircularProgress />
    return data
        ? (
            <List>
                {data.map((chat, index) => (
                    <ListItem disablePadding key={index}>
                        <ListItemButton>
                            <ListItemText primary={chat.name} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        )
        : <ErrorAlert />;
};
