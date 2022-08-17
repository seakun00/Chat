<?php

declare(strict_types=1);

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ChatIndexRequest extends FormRequest
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
