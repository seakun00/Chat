<?php

declare(strict_types=1);

namespace App\Http\Requests;

class ChatIndexRequest extends ApiRequest
{
    public function rules(): array
    {
        return [
            'limit' => ['required', 'numeric'],
            'offset' => ['required', 'numeric'],
            'name' => ['nullable', 'string', 'max:255'],
        ];
    }
}
