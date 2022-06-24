<?php

use App\Http\Controllers\General\ContryController;
use App\Http\Controllers\General\EmployeeController;
use App\Http\Controllers\General\TypeidController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware(['auth:sanctum'])->get('/user', function (Request $request) {
    return $request->user();
});

Route::resources([
    'paises' => ContryController::class,
    'tipoids' => TypeidController::class,
    'empleados' => EmployeeController::class,
    'areas' => AreaController::class,
   
]);
