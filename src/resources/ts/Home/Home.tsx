import React from "react";
import { Grid } from "@mui/material";
import { ChatBookmarks } from "@/ts/Home/ChatBookmarks";
import { ChatIdProvider } from "@/ts/Home/ChatIdProvider";
import { Chat } from "@/ts/Home/Chat";

export const Home = () => (
    <ChatIdProvider>
        <Grid
            container
            spacing={2}
            sx={{
                // Grid containerでmargin topに-16pxが設定されるので調整してる
                // https://stackoverflow.com/questions/50416346/grid-with-negative-margin-top-break-my-ui
                height: `calc(100% + 16px)`,
            }}
        >
            <Grid item xs={4}>
                <ChatBookmarks />
            </Grid>
            <Grid item xs={8}>
                <Chat />
            </Grid>
        </Grid>
    </ChatIdProvider>
);
