import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Login } from '@/ts/Login';
import { Chats } from '@/ts/Chat/Chats';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Route } from '@/ts/layout/Route';
import { createTheme, ThemeProvider } from '@mui/material';
import { HomeRoute } from '@/ts/layout/HomeRoute';
import { Chat } from '@/ts/Home/Chat';

export const App = () => {
    const queryClient = new QueryClient();
    const theme = createTheme();

    return (
        <QueryClientProvider client={queryClient}>
            <ThemeProvider theme={theme}>
                <BrowserRouter>
                    <Route path="login" element={<Login />} />
                    <HomeRoute path="/" element={<Chat />} />
                    <HomeRoute path="chats" element={<Chats />} />
                </BrowserRouter>
            </ThemeProvider>
        </QueryClientProvider>
    );
};
