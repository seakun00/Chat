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
            sx={theme => ({
                height: `calc(100% - ${theme.mixins.toolbar}px)`
            })}
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
