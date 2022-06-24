<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Employee extends Model
{
    use HasFactory;
    protected $fillable = [
        'primer_apellido',
        'segundo_apellido',
        'primer_nombre',
        'otros_nombre',
        'contry_id',
        'type_id',
        'idnumber',
        'email',
        'fecha_ingreso',
        'area_id',
        'estado',
    ];
}
