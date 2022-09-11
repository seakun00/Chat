import React, { createContext, ReactNode, useState } from "react";

type ChatIdProviderProps = {
    children: ReactNode;
}

type ChatIdContextType = {
    chatId: number|undefined;
    setChatId: (chatId: number) => void;
}

export const ChatIdContext = createContext<ChatIdContextType>({} as ChatIdContextType);

export const ChatIdProvider = ({children} : ChatIdProviderProps) => {
    const [chatId, setChatId] = useState<number>();

    return (
        <ChatIdContext.Provider value={{chatId, setChatId}}>
            {children}
        </ChatIdContext.Provider>
    )
};
