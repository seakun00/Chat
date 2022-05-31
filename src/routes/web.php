<?php

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

Route::get('/', function () {
    return view('welcome');
});
Route::get('/login', [\App\Http\Controllers\AuthenticationController::class, 'login'])
    ->name('login');
Route::get('/logout', [\App\Http\Controllers\AuthenticationController::class, 'logout'])
    ->name('logout');
Route::post('/authenticate', [\App\Http\Controllers\AuthenticationController::class, 'authenticate'])
    ->name('authenticate');
Route::get('/chat', [\App\Http\Controllers\ChatController::class, 'index'])
    ->middleware('auth')
    ->name('chat.index');
