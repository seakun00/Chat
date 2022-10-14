import React, { createContext, ReactNode } from 'react';

type ChatIdProviderProps = {
    chatId: number;
    children: ReactNode;
};

type ChatIdContextType = {
    chatId: number;
};

export const ChatIdContext = createContext<ChatIdContextType>(
    {} as ChatIdContextType
);

export const ChatIdProvider = ({ chatId, children }: ChatIdProviderProps) => (
    <ChatIdContext.Provider value={{ chatId }}>
        {children}
    </ChatIdContext.Provider>
);
