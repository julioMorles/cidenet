<?php

namespace Database\Seeders;

use DB;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        echo "Iniciando ejecuion de Seeder " . __CLASS__ . "\n";

        echo "Creando mantenimientos paises - Line:" . __LINE__ . "\n";
        $paises = array(
            [
                'nombre' => "Colombia",
                'dominio' => "cidenet.com.co"
            ],
            [
                'nombre' => "Estados Unidos",
                'dominio' => "cidenet.com.us"
            ]
        );

        foreach ($paises as $pais) {
            \App\Models\Country::create($pais);
        }

        echo "Creando mantenimientos tipos de id - Line:" . __LINE__ . "\n";

        $tipoids = array(
            ['nombre' => "Cédula de Ciudadanía"],
            ['nombre' => "Cédula de Extranjería"],
            ['nombre' => "Pasaporte"],
            ['nombre' => "Permiso Especial"],
        );

        foreach ($tipoids as $tipoid) {
            \App\Models\Typeid::create($tipoid);
        }
        echo "Creando mantenimientos areas - Line:" . __LINE__ . "\n";
        $areas = array(
            ['nombre' => "Administración"],
            ['nombre' => "Financiera"],
            ['nombre' => "Compras"],
            ['nombre' => "Infraestructura"],
            ['nombre' => "Operación"],
            ['nombre' => "Talento Humano"],
            ['nombre' => "Servicios"],
            ['nombre' => "Varios"],
        );
        foreach ($areas as $area) {
            \App\Models\Area::create($area);
        }
    }
}
