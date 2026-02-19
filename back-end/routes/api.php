<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Models\Module;

Route::get('/test', function () {
    return response()->json(['bericht' => 'werkt!']);
});

Route::get('/modules', function () {
    // We halen alles op en sturen het als JSON terug
    return response()->json(Module::all());
});