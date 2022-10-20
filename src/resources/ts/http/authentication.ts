import { client, getCsrfToken } from '@/ts/http/client';

export const login = (email: string, password: string) =>
    client('/api/authenticate', {
        method: 'POST',
        body: JSON.stringify({
            _token: getCsrfToken(),
            email: email,
            password: password,
        }),
        headers: {
            'Content-Type': 'application/json',
        },
    });
