import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "@/ts/Login";
import { Chats } from "@/ts/Chat/Chats";

export const App = () => (
    <BrowserRouter>
        <Routes>
            <Route path="login" element={<Login/>}/>
            <Route path="chats" element={<Chats/>}/>
        </Routes>
    </BrowserRouter>
);
