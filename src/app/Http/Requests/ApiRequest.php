<?php

declare(strict_types=1);

namespace App\Http\Requests;

use App\Enums\ErrorResponseType;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Exceptions\HttpResponseException;

class ApiRequest extends FormRequest
{
    /**
     * { @inheritdoc }
     */
    protected function failedValidation(Validator $validator): void
    {
        $response = [
            'message' => 'Validation failed.',
            'type' => ErrorResponseType::VALIDATION_ERROR,
            'user_messages' => $validator->errors(),
        ];

        $jsonResponse = response()->json($response, 400);
        throw new HttpResponseException($jsonResponse);
    }
}
