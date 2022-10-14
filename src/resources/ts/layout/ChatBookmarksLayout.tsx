import { Grid } from '@mui/material';
import { Header, Spacer } from '@/ts/layout/Header';
import React from 'react';
import { Outlet, useParams } from 'react-router-dom';
import { useAppBarHeight } from '@/ts/layout/useAppBarHeight';
import { ChatIdProvider } from '@/ts/ChatBookmarks/ChatIdProvider';
import { ChatBookmarkProvider } from '@/ts/ChatBookmarks/ChatBookmarkProvider';
import { main } from '@/ts/layout/color';
import { ChatBookmarks } from '@/ts/ChatBookmarks/ChatBookmarks';
import { ErrorAlert } from '@/ts/layout/ErrorAlert';

type ChatBookmarksLayoutParams = {
    chatId?: string;
};

export const ChatBookmarksLayout = () => {
    // https://github.com/mui/material-ui/issues/10739
    const appBarMinHeight = useAppBarHeight();
    const { chatId } = useParams<ChatBookmarksLayoutParams>();

    if (chatId && isNaN(Number(chatId))) {
        return <ErrorAlert />;
    } else {
        return (
            <>
                <Header />
                <Spacer />
                <ChatIdProvider chatId={Number(chatId)}>
                    <ChatBookmarkProvider>
                        <Grid
                            container
                            sx={{
                                height: `calc(100vh - ${appBarMinHeight}px)`,
                            }}
                        >
                            <Grid
                                item
                                xs={2}
                                sx={{
                                    backgroundColor: main,
                                    color: 'white',
                                }}
                            >
                                <ChatBookmarks />
                            </Grid>
                            <Grid item xs={10}>
                                <Outlet />
                            </Grid>
                        </Grid>
                    </ChatBookmarkProvider>
                </ChatIdProvider>
            </>
        );
    }
};
