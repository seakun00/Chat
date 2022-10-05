<?php

declare(strict_types=1);

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ChatBookmarkCreateRequest extends FormRequest
{
    public function rules(): array
    {
        return [
            'chat_id' => ['required', 'numeric', 'exists:chats,id'],
        ];
    }
}
