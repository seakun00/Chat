import React, { MouseEvent, useContext } from 'react';
import { registerChatBookmark } from '@/ts/http/chatBookmarks';
import { IconButton } from '@mui/material';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import { ChatBookmarkContext } from '@/ts/Home/ChatBookmarkProvider';

type ChatBookmarkButtonProps = {
    chatId: number;
};

export const ChatBookmarkRegistrationButton = (
    props: ChatBookmarkButtonProps
) => {
    const { refetch } = useContext(ChatBookmarkContext);
    const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
        registerChatBookmark(props.chatId).then(() => refetch());
    };

    return (
        <IconButton size="small" onClick={handleClick}>
            <BookmarkBorderIcon />
        </IconButton>
    );
};
