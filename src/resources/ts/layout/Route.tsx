import {
    Routes,
    Route as BaseRoute,
    RouteProps,
} from "react-router-dom";
import React from "react";
import {Header, Spacer} from "@/ts/layout/Header";
import { Container, CssBaseline } from "@mui/material";

export const Route = (props: RouteProps) => (
    <Routes>
        <BaseRoute
            {...props}
            element={
                <>
                    <CssBaseline/>
                    <Header/>
                    <Spacer/>
                    <Container
                        component="main"
                        maxWidth={false}
                        disableGutters
                    >
                        {props.element}
                    </Container>
                </>
            }
        />
    </Routes>
);
