import { client, getCsrfToken } from '@/ts/http/client';

export type ChatBookmark = {
    id: number;
    chat_id: number;
    name: string;
};

export const getChatBookmarks = (): Promise<ChatBookmark[]> =>
    client(`/api/chat_bookmarks`, {
        method: 'GET',
    });

export const registerChatBookmark = (chatId: number) =>
    client('/api/chat_bookmark', {
        method: 'POST',
        body: JSON.stringify({
            _token: getCsrfToken(),
            chat_id: chatId,
        }),
        headers: {
            'Content-Type': 'application/json',
        },
    });
