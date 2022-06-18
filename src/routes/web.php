<?php

use App\Http\Controllers\AuthenticationController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/login', [AuthenticationController::class, 'login'])
    ->name('login');
Route::get('/logout', [AuthenticationController::class, 'logout'])
    ->name('logout');
Route::post('/authenticate', [AuthenticationController::class, 'authenticate'])
    ->name('authenticate');
Route::get('/chat', [\App\Http\Controllers\ChatController::class, 'index'])
    ->middleware('auth')
    ->name('chat.index');
Route::get('/{any}', static function () {
    return view('index');
})
    ->where('any', '.*')
    ->middleware('auth')
    ->name('index');
