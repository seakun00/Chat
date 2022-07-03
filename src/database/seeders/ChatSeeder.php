<?php

declare(strict_types=1);

namespace Database\Seeders;

use App\Models\Chat;
use Illuminate\Database\Seeder;

class ChatSeeder extends Seeder
{
    public function run(): void
    {
        Chat::create([
            'id' => 1,
            'name' => '今日の晩御飯を考える主婦の会',
        ]);

        Chat::factory()
            ->count(30)
            ->create();
    }
}
