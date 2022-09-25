import { Routes, Route as BaseRoute, RouteProps } from 'react-router-dom';
import React from 'react';
import { Header, Spacer } from '@/ts/layout/Header';
import { CssBaseline } from '@mui/material';
import { Home } from '@/ts/Home/Home';

export const HomeRoute = (props: RouteProps) => (
    <Routes>
        <BaseRoute
            {...props}
            element={
                <>
                    <CssBaseline />
                    <Header />
                    <Spacer />
                    <Home>{props.element}</Home>
                </>
            }
        />
    </Routes>
);
