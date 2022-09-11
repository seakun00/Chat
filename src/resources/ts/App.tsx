import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Login } from "@/ts/Login";
import { Chats } from "@/ts/chat/Chats";
import { QueryClient, QueryClientProvider } from "react-query";
import { Route } from "@/ts/layout/Route";
import { createTheme, ThemeProvider } from "@mui/material";
import { Home } from "@/ts/Home/Home";

export const App = () => {
    const queryClient = new QueryClient();
    const theme = createTheme();

    return (
        <QueryClientProvider client={queryClient}>
            <ThemeProvider theme={theme}>
                <BrowserRouter>
                    <Route path="login" element={<Login/>}/>
                    <Route path="/" element={<Home/>}/>
                    <Route path="chats" element={<Chats/>}/>
                </BrowserRouter>
            </ThemeProvider>
        </QueryClientProvider>
    );
};
