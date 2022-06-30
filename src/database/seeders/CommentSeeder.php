<?php

declare(strict_types=1);

namespace Database\Seeders;

use App\Enums\CommentType;
use App\Models\Chat;
use App\Models\Comment;
use App\Models\User;
use Illuminate\Database\Seeder;

class CommentSeeder extends Seeder
{
    public function run(): void
    {
        Comment::create([
            'id' => 1,
            'chat_id' => Chat::findOrFail(1)->id,
            'user_id' => User::findOrFail(1)->id,
            'type' => CommentType::TEXT,
        ]);
    }
}
