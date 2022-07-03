import { client } from "@/ts/http/client";

export type Chat = {
    id: number;
    name: string;
}

export const getChats = (): Promise<Chat[]> => {
    return client('/api/chats', {
        method: 'GET',
    });
}
