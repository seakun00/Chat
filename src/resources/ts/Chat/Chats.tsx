import React from "react";
import {
    List,
    ListItem,
    ListItemButton,
    ListItemText
} from "@mui/material";

export const Chats = () => {
    return (
        <List>
            <ListItem disablePadding>
                <ListItemButton>
                    <ListItemText primary="チャット1" />
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton>
                    <ListItemText primary="チャット2" />
                </ListItemButton>
            </ListItem>
        </List>
    );
};
