import { client } from '@/ts/http/client';

export type Comment = {
    id: number;
    type: string;
    created_at: string;
    text: string;
};

export const getComments = (
    chatId: number,
    limit: number,
    offset: number
): Promise<Comment[]> => {
    const params = new URLSearchParams({
        limit: limit.toString(),
        offset: offset.toString(),
    });
    return client(`/api/chats/${chatId}/comments?${params}`, {
        method: 'GET',
    });
};
