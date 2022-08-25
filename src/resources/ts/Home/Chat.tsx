import React, { useContext } from "react";
import { useQuery } from "react-query";
import { Chat as ChatType, getChat } from "@/ts/http/chat";
import { Stack } from "@mui/material";
import { Comments } from "@/ts/Home/Comments";
import { ChatIdContext } from "@/ts/Home/ChatIdProvider";

export const Chat = () => {
    const { chatId } = useContext(ChatIdContext);
    if (chatId === undefined) {
        return (
            <p>TODO:チャット一覧ページのリンクを追加する</p>
        );
    }

    const chat = useQuery<ChatType, Error>(
        ['chat', chatId],
        () => {
            return getChat(Number(chatId))
        }
    );

    return (
        <Stack
            spacing={2}
            sx={{height: "100%"}}
        >
            <Comments />
        </Stack>
    )
};
