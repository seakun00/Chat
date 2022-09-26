import React, { ReactNode } from 'react';
import { useAppBarHeight } from '@/ts/layout/useAppBarHeight';
import { ChatIdProvider } from '@/ts/Home/ChatIdProvider';
import { Grid } from '@mui/material';
import { main } from '@/ts/layout/color';
import { ChatBookmarks } from '@/ts/Home/ChatBookmarks';

export const Home = (props: { children: ReactNode }) => {
    // https://github.com/mui/material-ui/issues/10739
    const appBarMinHeight = useAppBarHeight();

    return (
        <ChatIdProvider>
            <Grid
                container
                spacing={2}
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
                    {props.children}
                </Grid>
            </Grid>
        </ChatIdProvider>
    );
};
