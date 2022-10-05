import React, { useContext } from 'react';
import { deleteChatBookmark } from '@/ts/http/chatBookmarks';
import { IconButton } from '@mui/material';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import { ChatBookmarkContext } from '@/ts/Home/ChatBookmarkProvider';
import { sub } from '@/ts/layout/color';

type ChatBookmarkDeleteButtonProps = {
    id: number;
};

export const ChatBookmarkDeleteButton = (
    props: ChatBookmarkDeleteButtonProps
) => {
    const { refetch } = useContext(ChatBookmarkContext);
    const handleClick = () => {
        deleteChatBookmark(props.id).then(() => refetch());
    };

    return (
        <IconButton size="small" onClick={handleClick}>
            <BookmarkIcon sx={{ color: sub }} />
        </IconButton>
    );
};
