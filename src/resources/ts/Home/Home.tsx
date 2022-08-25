import React, { createContext, useState } from "react";
import { Grid } from "@mui/material";
import { ChatBookmarks } from "@/ts/Home/ChatBookmarks";
import { ChatIdProvider } from "@/ts/Home/ChatIdProvider";

export const Home = () => {
    return (
        <ChatIdProvider>
            <Grid container spacing={2}>
                <Grid item xs={4}>
                    <ChatBookmarks />
                </Grid>
                <Grid item xs={8}>
                    <h1>コメント一覧を追加する予定</h1>
                </Grid>
            </Grid>
        </ChatIdProvider>
    );
}
