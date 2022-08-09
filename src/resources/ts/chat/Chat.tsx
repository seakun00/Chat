import React from "react";
import { useQuery } from "react-query";
import { Chat as ChatType, getChat } from "@/ts/http/chat";
import { useParams } from "react-router-dom";
import { Stack } from "@mui/material";
import { Comments } from "@/ts/chat/Comments";

export const Chat = () => {
    const { id: chatId } = useParams<{ id: string }>()
    const chat = useQuery<ChatType, Error>(
        ['chat', chatId],
        () => {
            return getChat(Number(chatId))
        }
    );

    return (
        <Stack
            spacing={2}
            sx={theme => ({
                height: `calc(100% - ${theme.mixins.toolbar.minHeight}px)`
            })}
        >
            <Comments />
        </Stack>
    )
};
