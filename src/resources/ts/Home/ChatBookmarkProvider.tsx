import React, { createContext, ReactNode } from 'react';
import { ChatBookmark, getChatBookmarks } from '@/ts/http/chatBookmarks';
import { useQuery } from 'react-query';
import { UseQueryResult } from 'react-query/types/react/types';

type ChatBookmarkProviderProps = {
    children: ReactNode;
};

type ChatBookmarkContextType = UseQueryResult<ChatBookmark[], Error>;

export const ChatBookmarkContext = createContext<ChatBookmarkContextType>(
    {} as ChatBookmarkContextType
);

export const ChatBookmarkProvider = ({
    children,
}: ChatBookmarkProviderProps) => {
    const query = useQuery<ChatBookmark[], Error>(
        'chat_bookmarks',
        getChatBookmarks
    );

    return (
        <ChatBookmarkContext.Provider value={query}>
            {children}
        </ChatBookmarkContext.Provider>
    );
};
