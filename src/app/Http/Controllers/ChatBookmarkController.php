<?php

declare(strict_types=1);

namespace App\Http\Controllers;

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
}
