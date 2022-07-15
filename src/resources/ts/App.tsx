import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Login } from "@/ts/Login";
import { Chats } from "@/ts/chat/Chats";
import { QueryClient, QueryClientProvider } from "react-query";
import { Route } from "@/ts/layout/Route";
import { Chat } from "@/ts/chat/Chat";

export const App = () => (
    <QueryClientProvider client={new QueryClient()}>
        <BrowserRouter>
            <Route path="login" element={<Login/>}/>
            <Route path="chats" element={<Chats/>}/>
            <Route path="chats/:id" element={<Chat/>}/>
        </BrowserRouter>
    </QueryClientProvider>
);
