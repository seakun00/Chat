<?php

declare(strict_types=1);

namespace App\Http\Requests;

class ChatCreateRequest extends ApiRequest
{
    public function rules(): array
    {
        return [
            'name' => ['required', 'unique:chats,name', 'max:30']
        ];
    }
}
