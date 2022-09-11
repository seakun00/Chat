import React from "react";
import { Grid } from "@mui/material";
import { ChatBookmarks } from "@/ts/Home/ChatBookmarks";
import { ChatIdProvider } from "@/ts/Home/ChatIdProvider";
import { Chat } from "@/ts/Home/Chat";
import { main } from "@/ts/layout/color";

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
            <Grid
                item
                xs={2}
                sx={{
                    backgroundColor: main,
                    color: "white",
                }}
            >
                <ChatBookmarks/>
            </Grid>
            <Grid item xs={10}>
                <Chat/>
            </Grid>
        </Grid>
    </ChatIdProvider>
);
