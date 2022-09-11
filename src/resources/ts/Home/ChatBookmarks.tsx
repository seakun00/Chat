import React, { useContext } from "react";
import { useQuery } from "react-query";
import { ChatBookmark, getChatBookmarks } from "@/ts/http/chatBookmarks";
import { Loading } from "@/ts/layout/Loading";
import {
    List,
    ListItem,
    ListItemButton,
    ListItemText,
} from "@mui/material";import {ErrorAlert} from "@/ts/layout/Error";
import { ChatIdContext } from "@/ts/Home/ChatIdProvider";

export const ChatBookmarks = () => {
    const { isLoading, data } = useQuery<ChatBookmark[], Error>('chat_bookmarks', getChatBookmarks);
    const { chatId, setChatId } = useContext(ChatIdContext);

    if (isLoading) {
        return <Loading />;
    } else if (data) {
        return (
            <List>
                {data.map((chatBookmark) => (
                    <ListItem
                        key={chatBookmark.id}
                        disablePadding
                        dense
                        sx={[
                            chatBookmark.id === chatId && {
                                backgroundColor: "cornflowerblue",
                            }
                        ]}
                    >
                        <ListItemButton onClick={() => setChatId(chatBookmark.chat_id)}>
                            <ListItemText
                                primary={chatBookmark.name}
                                primaryTypographyProps={{
                                    sx: {
                                        fontSize: "15px",
                                        fontWeight: "bold",
                                    }
                                }}
                            />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        )
    } else {
        return <ErrorAlert />;
    }
}
