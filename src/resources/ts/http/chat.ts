import { client } from "@/ts/http/client";

export type ChatList = {
    count: number,
    chats: Chat[],
}

export type Chat = {
    id: number;
    name: string;
}

export const getChats = (limit: number, offset: number, name?: string): Promise<ChatList> => {
    const params = new URLSearchParams({
        'offset': offset.toString(),
        'limit': limit.toString(),
    })

    if (typeof name !== "undefined") {
        params.append('name', name);
    }

    return client('/api/chats?' + params, {
        method: 'GET',
    });
}

export const getChat = (id: number): Promise<Chat> => {
    return client('/api/chats/' + id, {
        method: 'GET',
    });
}
