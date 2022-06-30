<?php

declare(strict_types=1);

namespace Database\Seeders;

use App\Models\Comment;
use App\Models\Text;
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
    }
}
