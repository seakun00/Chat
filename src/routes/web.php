<?php

declare(strict_types=1);

use App\Http\Controllers\AuthenticationController;
use App\Http\Controllers\ChatBookmarkController;
use App\Http\Controllers\ChatController;
use App\Http\Controllers\CommentController;
use Illuminate\Support\Facades\Route;

Route::get('/login', [AuthenticationController::class, 'login'])
    ->name('login');
Route::get('/logout', [AuthenticationController::class, 'logout'])
    ->name('logout');
Route::prefix('api')->group(static function () {
    Route::post('/authenticate', [AuthenticationController::class, 'authenticate'])
        ->name('authenticate');
    Route::get('/chats', [ChatController::class, 'index'])
        ->middleware('auth')
        ->name('chat.index');
    Route::get('/chats/{chat}', [ChatController::class, 'detail'])
        ->middleware('auth')
        ->name('chat.detail');
    Route::get('/chats/{chat}/comments', [CommentController::class, 'index'])
        ->middleware('auth')
        ->name('comment.index');
    Route::get('/chat_bookmarks', [ChatBookmarkController::class, 'index'])
        ->middleware('auth')
        ->name('chat_bookmark.index');
    Route::post('/chat_bookmark', [ChatBookmarkController::class, 'create'])
        ->middleware('auth')
        ->name('chat_bookmark.create');
    Route::delete('/chat_bookmark/{chat_bookmark}', [ChatBookmarkController::class, 'delete'])
        ->middleware('auth')
        ->name('chat_bookmark.delete');
});
Route::get('/{any}', static function () {
    return view('index');
})
    ->where('any', '.*')
    ->middleware('auth')
    ->name('index');
