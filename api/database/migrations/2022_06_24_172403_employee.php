<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class Employee extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('countries', function (Blueprint $table) {
            $table->id();
            $table->string('nombre');
            $table->string('dominio');
            $table->timestamps();
        });
        Schema::create('areas', function (Blueprint $table) {
            $table->id();
            $table->string('nombre');
            $table->timestamps();
        });
        Schema::create('typeids', function (Blueprint $table) {
            $table->id();
            $table->string('nombre');
            $table->timestamps();
        });

        Schema::create('employees', function (Blueprint $table) {
            $table->id();
            $table->string('primer_apellido',20);
            $table->string('segundo_apellido',20);
            $table->string('primer_nombre',20);
            $table->string('otros_nombre',50)->nullable();
            $table->unsignedBigInteger('contry_id');
            $table->unsignedBigInteger('type_id');
            $table->string('idnumber',20)->unique();
            $table->string('email')->unique();
            $table->date('fecha_ingreso');
            $table->unsignedBigInteger('area_id');
            $table->boolean('estado');
            $table->timestamps();
            
        });
        Schema::table('employees', function (Blueprint $table) {
            $table->foreign('contry_id')->references('id')->on('countries');
            $table->foreign('type_id')->references('id')->on('typeids');
            $table->foreign('area_id')->references('id')->on('areas');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('employees');
        Schema::dropIfExists('areas');
        Schema::dropIfExists('typeids');
        Schema::dropIfExists('countries');
    }
}
