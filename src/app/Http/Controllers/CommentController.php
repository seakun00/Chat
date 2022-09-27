<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use App\Http\Requests\CommentIndexRequest;
use App\Models\Chat;
use App\Repositories\CommentRepository;
use Illuminate\Http\JsonResponse;

class CommentController extends Controller
{
    public function __construct(private CommentRepository $commentRepository)
    {
    }

    public function index(CommentIndexRequest $request, Chat $chat): JsonResponse
    {
        $offset = $request->get('offset');
        $limit = $request->get('limit');
        $comments = $this->commentRepository->getByChatAsBuilder($chat)
            ->offset($offset)
            ->limit($limit)
            ->get();

        return response()->json($comments);
    }
}
