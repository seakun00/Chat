import { Box, List, ListItem, ListItemText } from '@mui/material';
import React, { UIEvent, useContext, useEffect, useRef, useState } from 'react';
import { useGetComments } from '@/ts/Chat/useGetComments';
import { ChatIdContext } from '@/ts/ChatBookmarks/ChatIdProvider';

export const Comments = () => {
    const { chatId } = useContext(ChatIdContext);
    const [offset, setOffset] = useState(0);
    const comments = useGetComments(chatId, 30, offset);

    const commentList = useRef<HTMLUListElement>(null);
    const [scrollPosition, setScrollPosition] = useState<HTMLLIElement | null>(
        null
    );
    useEffect(() => {
        scrollPosition
            ? scrollPosition.scrollIntoView()
            : commentList.current?.scroll(0, commentList.current.scrollHeight);
    }, [comments]);

    const handleScroll = (event: UIEvent<HTMLUListElement>) => {
        const ul = event.currentTarget;
        const isTop = ul.scrollTop === 0;
        const isBottom = ul.scrollTop + ul.offsetHeight === ul.scrollHeight;

        if (isTop) {
            // コメント一覧更新時にスクロール位置がトップに移動しないように、更新前のトップの位置を保存する。
            commentList.current &&
                setScrollPosition(
                    commentList.current.firstElementChild as HTMLLIElement
                );

            // コメント追加のタイミングと被ってoffsetが少し前にずれることもあるけど、重複削除してチャットに追加するため問題ない。
            setOffset(comments.length);
        } else if (isBottom) {
            // TODO: コメント追加やサーバープッシュの実装時に追加する
        }
    };

    if (comments.length === 0) {
        return (
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '100%',
                }}
            >
                コメントを追加しよう！
            </Box>
        );
    } else {
        return (
            <List
                ref={commentList}
                onScroll={handleScroll}
                sx={{
                    height: '100%',
                    overflow: 'auto',
                }}
            >
                {comments.map((comment) => (
                    <ListItem key={comment.id}>
                        <ListItemText primary={comment.text} />
                    </ListItem>
                ))}
            </List>
        );
    }
};
