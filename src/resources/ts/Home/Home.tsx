import React from "react";
import { Grid } from "@mui/material";
import { ChatBookmarks } from "@/ts/Home/ChatBookmarks";

export const Home = () => {
    return (
        <Grid container spacing={2}>
            <Grid item xs={4}>
                <ChatBookmarks />
            </Grid>
            <Grid item xs={8}>
                <h1>コメント一覧を追加する予定</h1>
            </Grid>
        </Grid>
    );
}
