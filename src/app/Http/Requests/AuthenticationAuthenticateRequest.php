<?php

declare(strict_types=1);

namespace App\Http\Requests;

class AuthenticationAuthenticateRequest extends ApiRequest
{
    public function rules(): array
    {
        return [
            'email' => [
                'required',
                'email',
            ],
            'password' => [
                'required',
            ],
        ];
    }
}
