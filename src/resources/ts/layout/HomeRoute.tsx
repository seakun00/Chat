import { Routes, Route as BaseRoute, RouteProps } from 'react-router-dom';
import React, { ReactNode } from 'react';
import { Header, Spacer } from '@/ts/layout/Header';
import { CssBaseline, Grid } from '@mui/material';
import { useAppBarHeight } from '@/ts/layout/useAppBarHeight';
import { ChatIdProvider } from '@/ts/Home/ChatIdProvider';
import { main } from '@/ts/layout/color';
import { ChatBookmarks } from '@/ts/Home/ChatBookmarks';
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
