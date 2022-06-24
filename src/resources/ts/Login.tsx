import React from "react";
import { Button, Container, Stack, TextField } from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import { ValidationError } from "@/ts/http/error/ValidationError";
import { client, getCsrfToken } from "@/ts/http/client";

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

    const onSubmit = async (formInputs: FormInputs) => {
        formInputs._token = getCsrfToken() ?? null;
        const data = await client('/api/authenticate', {
            method: 'POST',
            body: JSON.stringify(formInputs),
            headers: {
                'Content-Type': 'application/json'
            },
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
            }
        })
    };

    return (
        <Container maxWidth="xs" sx={{mt: 10}}>
            <Stack spacing={2} component="form" onSubmit={handleSubmit(onSubmit)}>
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
