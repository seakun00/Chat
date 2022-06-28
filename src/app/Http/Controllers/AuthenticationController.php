<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use App\Enums\ErrorResponseType;
use App\Http\Requests\AuthenticationAuthenticateRequest;
use Illuminate\Contracts\View\View;
use Illuminate\Http\Exceptions\HttpResponseException;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthenticationController extends Controller
{
    public function login(): RedirectResponse | View
    {
        if (Auth::check()) {
            return redirect('chat');
        }

        return view('index');
    }

    public function authenticate(AuthenticationAuthenticateRequest $request): JsonResponse
    {
        $credentials = $request->only('email', 'password');
        if (!Auth::attempt($credentials)) {
            $jsonResponse = response()->json([
                'message' => 'Login failed.',
                'type' => ErrorResponseType::LOGIN_ERROR,
            ], 400);
            throw new HttpResponseException($jsonResponse);
        }

        $request->session()->regenerate();
        return response()->json();
    }

    public function logout(Request $request): RedirectResponse
    {
        Auth::logout();
        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return redirect('login');
    }
}
