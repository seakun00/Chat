import { client } from '@/ts/http/client';

export type Chat = {
    id: number;
    name: string;
};

export const getChats = (
    limit: number,
    offset: number,
    name: string
): Promise<Chat[]> => {
    const params = new URLSearchParams({
        offset: offset.toString(),
        limit: limit.toString(),
        name: name,
    });

    return client('/api/chats?' + params, {
        method: 'GET',
    });
};

export const getChat = (id: number): Promise<Chat> => {
    return client('/api/chats/' + id, {
        method: 'GET',
    });
};
