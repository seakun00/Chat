<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use App\Http\Requests\ChatCreateRequest;
use App\Http\Requests\ChatIndexRequest;
use App\Models\Chat;
use Illuminate\Http\JsonResponse;

class ChatController extends Controller
{
    public function index(ChatIndexRequest $request): JsonResponse
    {
        $query = Chat::with(['comments']);

        $name = $request->get('name');
        if ($name) {
            $query->where('name', 'like', "%$name%");
        }

        $offset = $request->get('offset');
        $limit = $request->get('limit');
        $chats = $query->offset($offset)
            ->limit($limit)
            ->get();

        $response = $chats->map(static function(Chat $chat) {
            return [
                'id' => $chat->id,
                'name' => $chat->name,
                'created_at' => $chat->created_at->format('Y/m/d'),
                'comment_count' => $chat->comments->count(),
            ];
        });

        return response()->json($response);
    }

    public function detail(Chat $chat): JsonResponse
    {
        return response()->json($chat);
    }

    public function create(ChatCreateRequest $request): JsonResponse
    {
        $name = $request->post('name');

        $chat = new Chat();
        $chat->name = $name;
        $chat->save();

        return response()->json($chat);
    }
}
