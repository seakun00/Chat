import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "@/ts/Login";
import { Chats } from "@/ts/chat/Chats";
import { QueryClient, QueryClientProvider } from "react-query";

export const App = () => (
    <QueryClientProvider client={new QueryClient()}>
        <BrowserRouter>
            <Routes>
                <Route path="login" element={<Login/>}/>
                <Route path="chats" element={<Chats/>}/>
            </Routes>
        </BrowserRouter>
    </QueryClientProvider>
);
