import {
    AppBar,
    Box,
    Button,
    Container,
    Toolbar,
    Typography,
} from '@mui/material';
import React from 'react';
import { useLocation } from 'react-router-dom';
import { main, mainHover } from '@/ts/common/color';

export const Header = () => {
    const location = useLocation();

    // 現状ログインフォーム以外は認証が必要なので、パスを見てログアウトボタンを表示するか判定する。
    return (
        <AppBar
            sx={{
                backgroundColor: main,
            }}
        >
            <Container maxWidth={false}>
                <Toolbar>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ flexGrow: 1 }}
                    >
                        オープンチャット
                    </Typography>
                    {location.pathname !== '/login' && (
                        <Button
                            color="inherit"
                            href="/logout"
                            sx={{
                                '&:hover': {
                                    backgroundColor: mainHover,
                                },
                            }}
                        >
                            ログアウト
                        </Button>
                    )}
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export const Spacer = () => (
    <Box
        sx={(theme) => ({
            backgroundColor: main,
            ...theme.mixins.toolbar,
        })}
    />
);
