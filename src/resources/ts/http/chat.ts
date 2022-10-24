import { client, getCsrfToken } from '@/ts/http/client';

export type Chat = {
    id: number;
    name: string;
    created_at: string;
    comment_count: number;
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

export const getChat = (chatId: number): Promise<Chat> =>
    client(`/api/chats/${chatId}`, {
        method: 'GET',
    });

export const createChat = (name: string): Promise<Chat> =>
    client('/api/chats', {
        method: 'POST',
        body: JSON.stringify({
            _token: getCsrfToken(),
            name: name,
        }),
        headers: {
            'Content-Type': 'application/json',
        },
    });
