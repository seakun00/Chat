<?php

declare(strict_types=1);

namespace App\Enums;

use BenSampo\Enum\Enum;

final class ErrorResponseType extends Enum
{
    public const LOGIN_ERROR = 'login_error';
    public const VALIDATION_ERROR = 'validation_error';
}
