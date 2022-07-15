import {
    Routes,
    Route as BaseRoute,
    RouteProps,
} from "react-router-dom";
import React from "react";
import { Header } from "@/ts/layout/Header";
import { Container, CssBaseline } from "@mui/material";

export const Route = (props: RouteProps) => (
    <Routes>
        <BaseRoute
            {...props}
            element={
                <>
                    <CssBaseline />
                    <Header />
                    <Container component="main" sx={{mt: 2}}>
                        {props.element}
                    </Container>
                </>
            }
        />
    </Routes>
);
