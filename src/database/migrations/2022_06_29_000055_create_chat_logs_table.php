<?php

declare(strict_types=1);

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('chat_logs', static function (Blueprint $table) {
            $table->id();
            $table->foreignId('chat_id')->constrained();
            $table->foreignId('user_id')->constrained();
            $table->string('comment_type');
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('chat_logs');
    }
};
