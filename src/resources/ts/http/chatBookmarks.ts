import { client } from "@/ts/http/client";

export type ChatBookmark = {
    id: number;
    chat_id: number;
    name: string;
}

export const getChatBookmarks = (): Promise<ChatBookmark[]> =>
    client(`/api/chat_bookmarks`, {
        method: 'GET',
    });
