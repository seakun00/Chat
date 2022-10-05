import React, { useContext } from 'react';
import { registerChatBookmark } from '@/ts/http/chatBookmarks';
import { IconButton } from '@mui/material';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import { ChatBookmarkContext } from '@/ts/Home/ChatBookmarkProvider';

type ChatBookmarkButtonProps = {
    chatId: number;
};

export const ChatBookmarkRegisterButton = (props: ChatBookmarkButtonProps) => {
    const { refetch } = useContext(ChatBookmarkContext);
    const handleClick = () => {
        registerChatBookmark(props.chatId).then(() => refetch());
    };

    return (
        <IconButton size="small" onClick={handleClick}>
            <BookmarkBorderIcon />
        </IconButton>
    );
};
