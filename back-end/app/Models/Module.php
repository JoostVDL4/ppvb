<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Module extends Model
{
    use HasFactory;

    // deze velden opslaan
    protected $fillable = [
        'year',
        'module_title',
        'module_number',
        'description',
        'icon',
        'inverted',
    ];

}