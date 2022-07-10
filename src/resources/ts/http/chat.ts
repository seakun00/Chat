import { client } from "@/ts/http/client";

export type ChatList = {
    count: number,
    chats: Chat[],
}

type Chat = {
    id: number;
    name: string;
}

export const getChats = (limit: number, offset: number): Promise<ChatList> => {
    const params = new URLSearchParams({
        'offset': offset.toString(),
        'limit': limit.toString(),
    })
    return client('/api/chats?' + params, {
        method: 'GET',
    });
}
