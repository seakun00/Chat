<?php

declare(strict_types=1);

namespace Database\Seeders;

use App\Enums\CommentType;
use App\Models\Chat;
use App\Models\Comment;
use App\Models\Text;
use App\Models\User;
use Illuminate\Database\Seeder;

class TextSeeder extends Seeder
{
    public function run(): void
    {
        Text::create([
            'id' => 1,
            'comment_id' => Comment::findOrFail(1)->id,
            'text' => '玉ねぎで簡単に作れる料理ありませんか？',
        ]);
        $this->createTextComment(100);
    }

    private function createTextComment(int $count): void
    {
        for ($i = 0; $i < $count; $i++) {
            $comment = Comment::factory()
                ->create([
                    'chat_id' => Chat::findOrFail(1)->id,
                    'user_id' => User::findOrFail(1)->id,
                    'type' => CommentType::TEXT,
                ]);
            Text::factory()
                ->create([
                    'comment_id' => $comment->id,
                ]);
        }
    }
}
