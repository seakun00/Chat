import React, { useContext, useState } from 'react';
import { deleteChatBookmark } from '@/ts/http/chatBookmarks';
import { IconButton } from '@mui/material';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import { ChatBookmarkContext } from '@/ts/Home/ChatBookmarkProvider';
import { sub } from '@/ts/layout/color';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';

type ChatBookmarkDeleteButtonProps = {
    id: number;
};

export const ChatBookmarkDeleteButton = (
    props: ChatBookmarkDeleteButtonProps
) => {
    const { refetch } = useContext(ChatBookmarkContext);
    const [isRequest, setIsRequest] = useState(false);
    const handleClick = () => {
        setIsRequest(true);
        deleteChatBookmark(props.id).then(() => refetch());
    };

    return (
        <IconButton size="small" onClick={handleClick}>
            {isRequest ? (
                <BookmarkBorderIcon />
            ) : (
                <BookmarkIcon sx={{ color: sub }} />
            )}
        </IconButton>
    );
};
