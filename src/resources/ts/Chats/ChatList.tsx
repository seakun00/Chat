import { Chat } from '@/ts/http/chat';
import React, { UIEvent, useContext, useEffect, useRef, useState } from 'react';
import { ChatBookmarkContext } from '@/ts/ChatBookmarks/ChatBookmarkProvider';
import { List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import { ChatBookmarkDeleteButton } from '@/ts/Chats/ChatBookmarkDeleteButton';
import { ChatBookmarkRegisterButton } from '@/ts/Chats/ChatBookmarkRegisterButton';
import { Loading } from '@/ts/layout/Loading';

type ChatListProps = {
    rows: number;
    offset: number;
    setOffset: (offset: number) => void;
    isLoading: boolean;
    chats: Chat[];
};

export const ChatList = (props: ChatListProps) => {
    const { rows, offset, setOffset, isLoading, chats } = props;
    const chatList = useRef<HTMLUListElement>(null);
    const [scrollPosition, setScrollPosition] = useState<number | null>(null);
    const { data: chatBookmarks } = useContext(ChatBookmarkContext);

    useEffect(() => {
        scrollPosition && chatList.current?.scroll(0, scrollPosition);
    }, [chats]);

    const handleScroll = (event: UIEvent<HTMLUListElement>) => {
        const ul = event.currentTarget;
        const isBottom = ul.scrollTop + ul.offsetHeight === ul.scrollHeight;
        if (isBottom) {
            setScrollPosition(ul.scrollTop);
            setOffset(offset + rows);
        }
    };

    if (chats.length > 0) {
        return (
            <List
                ref={chatList}
                onScroll={handleScroll}
                sx={{
                    height: '100%',
                    overflow: 'auto',
                }}
                disablePadding
            >
                {chats.map((chat, index) => {
                    const registeredChatBookmark = chatBookmarks?.find(
                        (chatBookmark) => chatBookmark.chat_id === chat.id
                    );
                    return (
                        <ListItem
                            key={index}
                            secondaryAction={
                                registeredChatBookmark ? (
                                    <ChatBookmarkDeleteButton
                                        id={registeredChatBookmark.id}
                                    />
                                ) : (
                                    <ChatBookmarkRegisterButton
                                        chatId={chat.id}
                                    />
                                )
                            }
                            disablePadding
                        >
                            <ListItemButton>
                                <ListItemText primary={chat.name} />
                            </ListItemButton>
                        </ListItem>
                    );
                })}
            </List>
        );
    } else if (isLoading) {
        return <Loading />;
    } else {
        return null;
    }
};
