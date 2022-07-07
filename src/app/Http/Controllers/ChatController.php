<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use App\Models\Chat;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class ChatController extends Controller
{
    public function index(Request $request): JsonResponse
    {
        $query = Chat::query();
        $count = $query->count();

        if ($request->has('offset')) {
            $query->offset($request->get('offset'));
        }
        if ($request->has('limit')) {
            $query->limit($request->get('limit'));
        }

        $chats = $query->get();
        return response()->json([
            'chats' => $chats,
            'count' => $count,
        ]);
    }
}
