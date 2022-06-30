<?php

declare(strict_types=1);

namespace Database\Seeders;

use App\Models\Chat;
use App\Models\ChatAdmin;
use App\Models\User;
use Illuminate\Database\Seeder;

class ChatAdminSeeder extends Seeder
{
    public function run(): void
    {
        ChatAdmin::create([
            'id' => 1,
            'chat_id' => Chat::findOrFail(1)->id,
            'user_id' => User::findOrFail(1)->id,
        ]);
    }
}
