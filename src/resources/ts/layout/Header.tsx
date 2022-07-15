import {
    AppBar,
    Button,
    Container,
    Toolbar,
    Typography
} from "@mui/material";
import React from "react";
import { useLocation } from "react-router-dom";

export const Header = () => {
    const location = useLocation();
    console.log(location);

    // 現状ログインフォーム以外は認証が必要なので、パスを見てログアウトボタンを表示するか判定する。
    return (
        <AppBar position="relative">
            <Container>
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                        Chat App
                    </Typography>
                    {location.pathname !== '/login' &&
                        <Button color="inherit" href="/logout">ログアウト</Button>
                    }
                </Toolbar>
            </Container>
        </AppBar>
    )
};
