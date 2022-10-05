import React, { useContext, useState } from 'react';
import { registerChatBookmark } from '@/ts/http/chatBookmarks';
import { IconButton } from '@mui/material';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import { ChatBookmarkContext } from '@/ts/Home/ChatBookmarkProvider';
import { sub } from '@/ts/layout/color';
import BookmarkIcon from '@mui/icons-material/Bookmark';

type ChatBookmarkButtonProps = {
    chatId: number;
};

export const ChatBookmarkRegisterButton = (props: ChatBookmarkButtonProps) => {
    const { refetch } = useContext(ChatBookmarkContext);
    const [isRequest, setIsRequest] = useState(false);
    const handleClick = () => {
        setIsRequest(true);
        registerChatBookmark(props.chatId).then(() => refetch());
    };

    return (
        <IconButton size="small" onClick={handleClick}>
            {isRequest ? (
                <BookmarkIcon sx={{ color: sub }} />
            ) : (
                <BookmarkBorderIcon />
            )}
        </IconButton>
    );
};
