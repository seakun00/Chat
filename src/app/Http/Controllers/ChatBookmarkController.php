<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use App\Http\Requests\ChatBookmarkCreateRequest;
use App\Models\Chat;
use App\Models\ChatBookmark;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class ChatBookmarkController extends Controller
{
    public function index(Request $request): JsonResponse
    {
        $userId = $request->user()?->id;
        $chatBookmarks = ChatBookmark::select('chat_bookmarks.id', 'chat_bookmarks.chat_id', 'chats.name')
            ->join('chats', 'chats.id', '=', 'chat_bookmarks.chat_id')
            ->where('chat_bookmarks.user_id', '=', $userId)
            ->orderBy('chats.name')
            ->get();

        return response()->json($chatBookmarks);
    }

    public function create(ChatBookmarkCreateRequest $request): JsonResponse
    {
        $user = $request->user();
        $chatId = $request->post('chat_id');
        $chat = Chat::findOrFail($chatId);

        $chatBookmark = new ChatBookmark();
        $chatBookmark->user()->associate($user);
        $chatBookmark->chat()->associate($chat);
        $chatBookmark->save();

        return response()->json($chatBookmark);
    }

    public function delete(ChatBookmark $chatBookmark): JsonResponse
    {
        $chatBookmark->delete();
        return response()->json();
    }
}
