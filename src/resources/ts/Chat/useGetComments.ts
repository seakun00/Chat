import { useState } from 'react';
import { Comment, getComments } from '@/ts/http/comment';
import { useQuery } from 'react-query';

type UseGetCommentsResult = {
    isLoading: boolean;
    comments: Comment[];
};

export const useGetComments = (
    chatId: number,
    rows: number,
    offset: number
): UseGetCommentsResult => {
    const [comments, setComments] = useState<Comment[]>([]);
    const [currentChatId, setCurrentChatId] = useState<number>(chatId);

    if (chatId !== currentChatId) {
        setComments([]);
        setCurrentChatId(chatId);
    }

    const { isLoading } = useQuery<Comment[], Error>(
        ['comments', chatId, offset],
        () => {
            return getComments(chatId, rows, offset);
        },
        {
            onSuccess: (data) => {
                const removeDuplicate = (
                    fetchedComments: Comment[]
                ): Comment[] =>
                    fetchedComments.filter((fetchedComment) => {
                        const isRegistered = comments.some((comment) => {
                            return comment.id === fetchedComment.id;
                        });
                        return !isRegistered;
                    });

                const fetchedComments = removeDuplicate(data);
                if (fetchedComments.length === 0) return;

                // コメント作成時のハンドリングは別で対応するつもりなので、一旦前のコメントを取得する場合だけ対応。
                fetchedComments.reverse();
                setComments([...fetchedComments, ...comments]);
            },
        }
    );

    return { isLoading, comments };
};
