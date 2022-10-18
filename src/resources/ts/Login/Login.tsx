import React, { useState } from 'react';
import { Alert, Container, Stack, TextField } from '@mui/material';
import { Controller, useForm } from 'react-hook-form';
import { ValidationError } from '@/ts/http/error/ValidationError';
import { LoginError } from '@/ts/http/error/LoginError';
import { useNavigate } from 'react-router-dom';
import { LoadingButton } from '@mui/lab';
import { sub, subHover } from '@/ts/common/color';
import { login } from '@/ts/http/authentication';

type FormInputs = {
    email: string;
    password: string;
};

export const Login = () => {
    const {
        control,
        handleSubmit,
        setError,
        formState: { errors, isSubmitting },
    } = useForm<FormInputs>({
        defaultValues: {
            email: '',
            password: '',
        },
    });
    const navigate = useNavigate();
    const [loginError, setLoginError] = useState<string | null>();

    const onSubmit = (formInputs: FormInputs) =>
        login(formInputs.email, formInputs.password)
            .then(() => {
                navigate('/');
            })
            .catch((error) => {
                if (error instanceof ValidationError) {
                    for (const key in error.userMessages) {
                        if (key === 'password' || key === 'email') {
                            setError(key, {
                                type: 'server',
                                message: error.userMessages[key],
                            });
                        }
                    }
                } else if (error instanceof LoginError) {
                    setLoginError('メールアドレスかパスワードが間違っています');
                }
            });

    return (
        <Container component="div" maxWidth="xs" sx={{ mt: 10 }}>
            <Stack
                spacing={2}
                component="form"
                onSubmit={handleSubmit(onSubmit)}
            >
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
                <LoadingButton
                    type="submit"
                    variant="contained"
                    loading={isSubmitting}
                    disabled={isSubmitting}
                    sx={{
                        backgroundColor: sub,
                        '&:hover': {
                            backgroundColor: subHover,
                        },
                    }}
                >
                    ログイン
                </LoadingButton>
            </Stack>
        </Container>
    );
};
