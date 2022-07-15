import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Login } from "@/ts/Login";
import { Chats } from "@/ts/chat/Chats";
import { QueryClient, QueryClientProvider } from "react-query";
import { Route } from "@/ts/layout/Route";

export const App = () => (
    <QueryClientProvider client={new QueryClient()}>
        <BrowserRouter>
            <Route path="login" element={<Login/>}/>
            <Route path="chats" element={<Chats/>}/>
        </BrowserRouter>
    </QueryClientProvider>
);
