<?php

declare(strict_types=1);

namespace App\Http\Requests;

class ChatBookmarkCreateRequest extends ApiRequest
{
    public function rules(): array
    {
        return [
            'chat_id' => ['required', 'numeric', 'exists:chats,id'],
        ];
    }
}
