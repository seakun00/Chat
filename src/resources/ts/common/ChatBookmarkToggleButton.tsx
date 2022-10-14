import React, { useContext } from 'react';
import { ChatBookmarkContext } from '@/ts/ChatBookmarks/ChatBookmarkProvider';
import { ChatBookmarkDeleteButton } from '@/ts/common/ChatBookmarkDeleteButton';
import { ChatBookmarkRegisterButton } from '@/ts/common/ChatBookmarkRegisterButton';

type ChatBookmarkToggleButtonProps = {
    chatId: number;
};

export const ChatBookmarkToggleButton = (
    props: ChatBookmarkToggleButtonProps
) => {
    const { data: chatBookmarks } = useContext(ChatBookmarkContext);
    const registeredChatBookmark = chatBookmarks?.find(
        (chatBookmark) => chatBookmark.chat_id === props.chatId
    );

    return registeredChatBookmark ? (
        <ChatBookmarkDeleteButton id={registeredChatBookmark.id} />
    ) : (
        <ChatBookmarkRegisterButton chatId={props.chatId} />
    );
};
