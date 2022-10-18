import { Chat } from '@/ts/http/chat';
import React, { UIEvent, useEffect, useRef, useState } from 'react';
import { List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import { Loading } from '@/ts/layout/Loading';
import { ChatBookmarkToggleButton } from '@/ts/common/ChatBookmarkToggleButton';

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
                    return (
                        <ListItem
                            key={index}
                            secondaryAction={
                                <ChatBookmarkToggleButton chatId={chat.id} />
                            }
                            disablePadding
                        >
                            <ListItemButton href={`/chats/${chat.id}`}>
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
