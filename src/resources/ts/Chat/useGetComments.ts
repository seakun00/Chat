import { useState } from 'react';
import { Comment, getComments } from '@/ts/http/comment';
import { useQuery } from 'react-query';

export const useGetComments = (
    chatId: number,
    rows: number,
    offset: number
): Comment[] => {
    const [comments, setComments] = useState<Comment[]>([]);

    useQuery<Comment[], Error>(
        ['comments', offset],
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

    return comments;
};
