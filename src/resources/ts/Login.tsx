import React from "react";
import { Stack, TextField, Container, Button } from "@mui/material";
import { useForm, Controller } from "react-hook-form";

type FormInputs = {
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

    const onSubmit = (data: FormInputs) => {
        // エラーメッセージの動作確認
        setError('email', {
            type: 'server',
            message: '正しい形式で入力してください'
        })
        setError('password', {
            type: 'server',
            message: '間違っています'
        })
    };

    return (
        <Container maxWidth="xs" sx={{mt: 10}}>
            <Stack spacing={2} component="form" onSubmit={handleSubmit(onSubmit)}>
                <Controller
                    name="email"
                    control={control}
                    render={({ field }) => {
                        console.log(errors)
                        return <TextField
                            {...field}
                            type="email"
                            label="メールアドレス"
                            error={!!errors.email}
                            helperText={errors.email?.message}
                        />
                    }}
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
