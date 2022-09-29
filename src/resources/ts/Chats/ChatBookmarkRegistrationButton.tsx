import React, { MouseEvent } from 'react';
import { registerChatBookmark } from '@/ts/http/chatBookmarks';
import { IconButton } from '@mui/material';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';

type ChatBookmarkButtonProps = {
    chatId: number;
};

export const ChatBookmarkRegistrationButton = (
    props: ChatBookmarkButtonProps
) => {
    const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
        registerChatBookmark(props.chatId).then((res) => console.log(res));
    };

    return (
        <IconButton size="small" onClick={handleClick}>
            <BookmarkBorderIcon />
        </IconButton>
    );
};
