import React, { MouseEvent } from "react";
import { useQuery } from "react-query";
import { ChatBookmark, getChatBookmarks } from "@/ts/http/chatBookmarks";
import { Loading } from "@/ts/layout/Loading";
import {
    List,
    ListItem,
    ListItemButton,
    ListItemText,
} from "@mui/material";import {ErrorAlert} from "@/ts/layout/Error";

export const ChatBookmarks = () => {
    const { isLoading, data } = useQuery<ChatBookmark[], Error>('chat_bookmarks', getChatBookmarks);

    const handleSelectChatBookmark = (chatId: number) => {
        // コメント一覧のチャットIDを設定する
    }

    if (isLoading) {
        return <Loading />;
    } else if (data) {
        return (
            <List>
                {data.map((chatBookmark) => (
                    <ListItem disablePadding key={chatBookmark.id}>
                        <ListItemButton onClick={() => handleSelectChatBookmark(chatBookmark.chat_id)}>
                            <ListItemText primary={chatBookmark.name} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        )
    } else {
        return <ErrorAlert />;
    }
}
