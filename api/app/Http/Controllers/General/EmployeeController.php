<?php

namespace App\Http\Controllers\General;

use App\Http\Controllers\Controller;
use App\Models\Employee as ModelsEmployee;
use App\Models\Country;
use App\Models\Typeid;
use Illuminate\Http\Request;

class EmployeeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return ModelsEmployee::get();
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        /*$validated = $request->validate([
            'primer_apellido' => 'required|max:20|regex:/^[\w-]*$/',
            'segundo_apellido' => 'required|max:20|regex:/^[\w-]*$/',
            'primer_nombre' => 'required|max:20|regex:/^[\w-]*$/',
            'otros_nombre' => 'max:50|regex:/^[\w-]*$/',
            'contry_id' => 'required|exists:countries,id',
            'type_id' => 'required|exists:typeids,id',
            'area_id' => 'required|exists:areas,id',
            'idnumber' => 'required|unique:employees',
            'email' => 'required',
            'fecha_ingreso'=> 'required|date'
        ]);*/
        
        // Logica para la creacion de los emails.
        // Se busca el dominio
        $dominio = Country::select('dominio')->find($request->contry_id);
        // Se crea el correo
        $tempEmail = strtolower($request->primer_nombre).".".strtolower($request->primer_apellido);
        $existe = ModelsEmployee::where('email', 'like',$tempEmail."%" )->get();
        // se verifica si existe, de existir se le adiciona el id.
        if(count($existe) > 0){
            $id = count($existe);
            $tempEmail = strtolower($request->primer_nombre).".".strtolower($request->primer_apellido).".".$id."@".$dominio->dominio;
        } else {
            $tempEmail .="@".$dominio->dominio;
        }

        //guardo el empleado
        $empleado = new ModelsEmployee();
        $empleado->primer_apellido = $request->primer_apellido;
        $empleado->segundo_apellido = $request->segundo_apellido;
        $empleado->primer_nombre = $request->primer_nombre;
        $empleado->otros_nombre = $request->otros_nombre;
        $empleado->contry_id = $request->contry_id;
        $empleado->type_id = $request->type_id;
        $empleado->idnumber = $request->idnumber;
        $empleado->email = $tempEmail;
        $empleado->fecha_ingreso = $request->fecha_ingreso;
        $empleado->area_id = $request->area_id;
        $empleado->estado = true;
        $empleado->save();
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
         /*$validated = $request->validate([
            'primer_apellido' => 'required|max:20|regex:/^[\w-]*$/',
            'segundo_apellido' => 'required|max:20|regex:/^[\w-]*$/',
            'primer_nombre' => 'required|max:20|regex:/^[\w-]*$/',
            'otros_nombre' => 'max:50|regex:/^[\w-]*$/',
            'contry_id' => 'required|exists:countries,id',
            'type_id' => 'required|exists:typeids,id',
            'area_id' => 'required|exists:areas,id',
            'idnumber' => 'required|unique:employees',
            'email' => 'required',
            'fecha_ingreso'=> 'required|date'
        ]);*/
        
        // Logica para la creacion de los emails.
        // Se busca el dominio
        $dominio = Country::select('dominio')->find($request->contry_id);
        // Se crea el correo
        $tempEmail = strtolower($request->primer_nombre).".".strtolower($request->primer_apellido);
        $existe = ModelsEmployee::where('email', 'like',$tempEmail."%" )->get();
        // se verifica si existe, de existir se le adiciona el id.
        if(count($existe) > 0){
            $idC = count($existe);
            $tempEmail = strtolower($request->primer_nombre).".".strtolower($request->primer_apellido).".".$idC."@".$dominio->dominio;
        } else {
            $tempEmail .="@".$dominio->dominio;
        }

        //guardo el empleado
        $empleado = ModelsEmployee::find($id);
        $empleado->primer_apellido = $request->primer_apellido;
        $empleado->segundo_apellido = $request->segundo_apellido;
        $empleado->primer_nombre = $request->primer_nombre;
        $empleado->otros_nombre = $request->otros_nombre;
        $empleado->contry_id = $request->contry_id;
        $empleado->type_id = $request->type_id;
        $empleado->idnumber = $request->idnumber;
        $empleado->email = $tempEmail;
        $empleado->fecha_ingreso = $request->fecha_ingreso;
        $empleado->area_id = $request->area_id;
        $empleado->estado = true;
        $empleado->save();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $empleado = ModelsEmployee::find($id);
        $empleado->delete();
    }
}
