<?php

declare(strict_types=1);

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Chat extends Model
{
    protected $casts = [
        'id' => 'int',
        'name' => 'string',
        'created_at' => 'datetime',
        'updated_at' => 'datetime',
    ];

    public function chatAdmins(): HasMany
    {
        return $this->hasMany(ChatAdmin::class);
    }

    public function comments(): HasMany
    {
        return $this->hasMany(Comment::class);
    }
}
