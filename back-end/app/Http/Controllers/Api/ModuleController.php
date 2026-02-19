<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Module;
use Illuminate\Http\Request;

class ModuleController extends Controller
{
    public function index()
    {
        // alles ophalen
        $modules = Module::all();

        $formattedModules = $modules->map(function ($module) {
            return [
                'id' => $module->id,
                'year' => $module->year,
                'moduleTitle' => $module->module_title,  
                'moduleNumber' => $module->module_number,
                'description' => $module->description,
                'icon' => $module->icon,
                'inverted' => (bool) $module->inverted,
            ];
        });

        return response()->json($formattedModules);
    }
}