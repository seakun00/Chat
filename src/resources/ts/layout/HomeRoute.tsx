import {
    Routes,
    Route as BaseRoute,
    RouteProps,
} from "react-router-dom";
import React, {ReactNode} from "react";
import { Header, Spacer } from "@/ts/layout/Header";
import {Container, CssBaseline, Grid} from "@mui/material";
import { useAppBarHeight } from "@/ts/layout/useAppBarHeight";
import {ChatIdProvider} from "@/ts/Home/ChatIdProvider";
import {main} from "@/ts/layout/color";
import {ChatBookmarks} from "@/ts/Home/ChatBookmarks";

export const HomeRoute = (props: RouteProps) => {
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
                            <Home>{props.element}</Home>
                        </Container>
                    </>
                }
            />
        </Routes>
    );
};

const Home = (props: {children: ReactNode}) => (
    <ChatIdProvider>
        <Grid
            container
            spacing={2}
            sx={{
                // Grid containerでmargin topに-16pxが設定されるので調整してる
                // https://stackoverflow.com/questions/50416346/grid-with-negative-margin-top-break-my-ui
                height: `calc(100% + 16px)`,
            }}
        >
            <Grid
                item
                xs={2}
                sx={{
                    backgroundColor: main,
                    color: "white",
                }}
            >
                <ChatBookmarks/>
            </Grid>
            <Grid item xs={10}>
                {props.children}
            </Grid>
        </Grid>
    </ChatIdProvider>
);
