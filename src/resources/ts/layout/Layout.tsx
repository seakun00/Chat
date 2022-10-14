import { Container } from '@mui/material';
import { Header, Spacer } from '@/ts/layout/Header';
import React from 'react';
import { Outlet } from 'react-router-dom';

export const Layout = () => (
    <>
        <Header />
        <Spacer />
        <Container component="main" maxWidth={false} disableGutters>
            <Outlet />
        </Container>
    </>
);
