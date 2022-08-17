<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use App\Http\Requests\ChatIndexRequest;
use App\Models\Chat;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class ChatController extends Controller
{
    public function index(ChatIndexRequest $request): JsonResponse
    {
        $query = Chat::query();

        $name = $request->get('name');
        if ($name) {
            $query->where('name', 'like', "%$name%");
        }

        $count = $query->count();

        $offset = $request->get('offset');
        $limit = $request->get('limit');
        $chats = $query->offset($offset)
            ->limit($limit)
            ->get();

        return response()->json([
            'chats' => $chats,
            'count' => $count,
        ]);
    }

    public function detail(Request $request, Chat $chat): JsonResponse
    {
        return response()->json($chat);
    }
}
