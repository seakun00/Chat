import {
    Routes,
    Route as BaseRoute,
    RouteProps,
} from "react-router-dom";
import React from "react";
import { Header } from "@/ts/layout/Header";
import { Box, Container, CssBaseline } from "@mui/material";

export const Route = (props: RouteProps) => (
    <Routes>
        <BaseRoute
            {...props}
            element={
                <>
                    <CssBaseline />
                    <Header />
                    <Spacer />
                    <Container component="main" maxWidth={false}>
                        {props.element}
                    </Container>
                </>
            }
        />
    </Routes>
);

const Spacer = () => <Box sx={(theme) => ({...theme.mixins.toolbar})} />;
