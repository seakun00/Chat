<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use App\Http\Requests\ChatIndexRequest;
use App\Models\Chat;
use Illuminate\Http\JsonResponse;

class ChatController extends Controller
{
    public function index(ChatIndexRequest $request): JsonResponse
    {
        $query = Chat::query();

        $name = $request->get('name');
        if ($name) {
            $query->where('name', 'like', "%$name%");
        }

        $offset = $request->get('offset');
        $limit = $request->get('limit');
        $chats = $query->offset($offset)
            ->limit($limit)
            ->get();

        return response()->json($chats);
    }
}
