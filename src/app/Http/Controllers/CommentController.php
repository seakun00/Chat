<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use App\Models\Chat;
use App\Repositories\CommentRepository;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class CommentController extends Controller
{
    public function __construct(private CommentRepository $commentRepository)
    {
    }

    public function index(Request $request, Chat $chat): JsonResponse
    {
        $query = $this->commentRepository->getByChatAsBuilder($chat);
        $count = $query->count();

        if ($request->has('offset')) {
            $query->offset($request->get('offset'));
        }
        if ($request->has('limit')) {
            $query->limit($request->get('limit'));
        }

        $comments = $query->get();
        return response()->json([
            'comments' => $comments,
            'count' => $count,
        ]);
    }
}
