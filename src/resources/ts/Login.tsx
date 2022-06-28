import React, { useState } from "react";
import {Alert, Button, Container, Stack, TextField} from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import { ValidationError } from "@/ts/http/error/ValidationError";
import { client, getCsrfToken } from "@/ts/http/client";
import { LoginError } from "@/ts/http/error/LoginError";

type FormInputs = {
    _token: string | null;
    email: string;
    password: string;
}

export const Login = () => {
    const { control, handleSubmit, setError, formState: { errors } } = useForm<FormInputs>({
        defaultValues: {
            email: '',
            password: '',
        }
    });
    const [loginError, setLoginError] = useState<string|null>();

    const onSubmit = (formInputs: FormInputs) => {
        formInputs._token = getCsrfToken() ?? null;
        client('/api/authenticate', {
            method: 'POST',
            body: JSON.stringify(formInputs),
            headers: {
                'Content-Type': 'application/json'
            },
        }).then((data) => {
            // todo: ログイン後にリダイレクトするページが実装できていないので、リダイレクト処理は別PRで実装する。
        }).catch((error) => {
            if (error instanceof ValidationError) {
                for (const key in error.userMessages) {
                    if (key === "password" || key === "email") {
                        setError(key, {
                            type: 'server',
                            message: error.userMessages[key]
                        })
                    }
                }
            } else if (error instanceof LoginError) {
                setLoginError('メールアドレスかパスワードが間違っています')
            }
        })
    };

    return (
        <Container maxWidth="xs" sx={{mt: 10}}>
            <Stack spacing={2} component="form" onSubmit={handleSubmit(onSubmit)}>
                {loginError && <Alert severity="error">{loginError}</Alert>}
                <Controller
                    name="email"
                    control={control}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            type="email"
                            label="メールアドレス"
                            error={!!errors.email}
                            helperText={errors.email?.message}
                        />
                    )}
                />
                <Controller
                    name="password"
                    control={control}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            type="password"
                            label="パスワード"
                            error={!!errors.password}
                            helperText={errors.password?.message}
                        />
                    )}
                />
                <Button type="submit" variant="contained">ログイン</Button>
            </Stack>
        </Container>
    )
}
