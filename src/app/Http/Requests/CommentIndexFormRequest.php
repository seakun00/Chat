<?php

declare(strict_types=1);

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class CommentIndexFormRequest extends FormRequest
{
    public function rules(): array
    {
        return [
            'offset' => ['required', 'numeric'],
            'limit' => ['required', 'numeric'],
        ];
    }
}
