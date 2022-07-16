<?php

declare(strict_types=1);

namespace App\Repositories;

use App\Models\Chat;
use App\Models\Comment;
use Illuminate\Database\Eloquent\Builder;

class CommentRepository
{
    public function getByChatAsBuilder(Chat $chat): Builder
    {
        return Comment::select([
            'comments.id',
            'comments.type',
            'texts.text',
        ])
            ->whereChatId($chat->id)
            ->leftJoin('texts', 'texts.comment_id', '=', 'comments.id');
    }
}
