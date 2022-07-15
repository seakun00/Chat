import {
    AppBar,
    Button,
    Container,
    Toolbar,
    Typography
} from "@mui/material";
import React from "react";

export const Header = () => (
    <AppBar position="relative">
        <Container>
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Chat App
                </Typography>
                <Button color="inherit">Login</Button>
            </Toolbar>
        </Container>
    </AppBar>
);
