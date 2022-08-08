<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use App\Http\Requests\CommentIndexFormRequest;
use App\Models\Chat;
use App\Repositories\CommentRepository;
use Illuminate\Http\JsonResponse;

class CommentController extends Controller
{
    public function __construct(private CommentRepository $commentRepository)
    {
    }

    public function index(CommentIndexFormRequest $request, Chat $chat): JsonResponse
    {
        $query = $this->commentRepository->getByChatAsBuilder($chat);

        $count = $query->count();

        $offset = $request->get('offset');
        $limit = $request->get('limit');
        $comments = $query->offset($offset)
            ->limit($limit)
            ->get();

        return response()->json([
            'comments' => $comments,
            'count' => $count,
        ]);
    }
}
