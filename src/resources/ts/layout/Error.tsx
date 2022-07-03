import React from "react";
import { Alert } from "@mui/material";

export const ErrorAlert = (props: {message?: string}) => (
    <Alert severity="error">
        {props.message ?? '読み込みに失敗しました。時間を空けて再度お試しください。'}
    </Alert>
);
