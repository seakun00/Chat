<?php

declare(strict_types=1);

namespace Database\Factories;

use App\Models\Text;
use Illuminate\Database\Eloquent\Factories\Factory;

class TextFactory extends Factory
{
    protected $model = Text::class;

    public function definition(): array
    {
        return [
            'text' => $this->faker->realText(30),
        ];
    }
}
