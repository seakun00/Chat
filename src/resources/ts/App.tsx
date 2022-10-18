import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Login } from '@/ts/Login/Login';
import { Chats } from '@/ts/Chats/Chats';
import { QueryClient, QueryClientProvider } from 'react-query';
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import { Chat } from '@/ts/Chat/Chat';
import { Layout } from '@/ts/layout/Layout';
import { ChatBookmarksLayout } from '@/ts/layout/ChatBookmarksLayout';
import { ChatsLink } from '@/ts/Chat/ChatsLink';

export const App = () => {
    const queryClient = new QueryClient();
    const theme = createTheme();

    return (
        <QueryClientProvider client={queryClient}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <BrowserRouter>
                    <Routes>
                        <Route path="/login" element={<Layout />}>
                            <Route index element={<Login />} />
                        </Route>
                        <Route path="/" element={<ChatBookmarksLayout />}>
                            <Route index element={<ChatsLink />} />
                            <Route path="/chats/:chatId" element={<Chat />} />
                            <Route path="/chats" element={<Chats />} />
                        </Route>
                    </Routes>
                </BrowserRouter>
            </ThemeProvider>
        </QueryClientProvider>
    );
};
