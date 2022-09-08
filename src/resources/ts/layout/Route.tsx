import {
    Routes,
    Route as BaseRoute,
    RouteProps,
} from "react-router-dom";
import React from "react";
import { Header } from "@/ts/layout/Header";
import { Box, Container, CssBaseline } from "@mui/material";
import { useAppBarHeight } from "@/ts/layout/useAppBarHeight";

export const Route = (props: RouteProps) => {
    // https://github.com/mui/material-ui/issues/10739
    const appBarMinHeight = useAppBarHeight();

    return (
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
                            sx={{
                                height: `calc(100vh - ${appBarMinHeight}px)`,
                            }}
                        >
                            {props.element}
                        </Container>
                    </>
                }
            />
        </Routes>
    );
};

const Spacer = () => <Box sx={(theme) => ({...theme.mixins.toolbar})} />;
