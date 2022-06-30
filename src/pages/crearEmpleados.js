import React, { useEffect, useState } from 'react';
import AppLayout from '@/components/Layouts/AppLayout'
import Swal from 'sweetalert2'
import Input from '@/components/Input'
import Label from '@/Components/Label';
import Select from 'react-select';
import Button from '@/Components/Button';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from '@/lib/axios';
import Router, { useRouter } from 'next/router'

function Crear() {

    const [primer_apellido, setPrimer_apellido] = useState('');
    const [segundo_apellido, setSegundo_apellido] = useState('');
    const [primer_nombre, setPrimer_nombre] = useState('');
    const [otros_nombre, setOtros_nombre] = useState('');
    const [contry_id, setContry_id] = useState('');
    const [type_id, setType_id] = useState('');
    const [idnumber, setIdnumber] = useState('');
    const [fecha_ingreso, setFecha_ingreso] = useState(new Date());
    const [area_id, setArea_id] = useState('');
    const [isSaving, setIsSaving] = useState(false)
    // Mantenimiento de las listas de seleccion
    // TODO: traer la data desde los endpoins del api
    const paises = [
        { value: '1', label: 'Colombia' },
        { value: '2', label: 'Estados Unidos' },
    ];
    const typeid = [
        { value: '1', label: "Cédula de Ciudadanía" },
        { value: '2', label: "Cédula de Extranjería" },
        { value: '3', label: "Pasaporte" },
        { value: '4', label: "Permiso Especial" },
    ];
    const areas = [
        { value: '1', label: "Administración" },
        { value: '2', label: "Financiera" },
        { value: '3', label: "Compras" },
        { value: '4', label: "Infraestructura" },
        { value: '5', label: "Operación" },
        { value: '6', label: "Talento Humano" },
        { value: '7', label: "Servicios" },
        { value: '8', label: "Varios" },
    ];
    // logica para el maximo de la fecha
    const hoy = new Date();
    let mesAnterior = new Date();
    mesAnterior.setDate(hoy.getDate() - 30)
    // logica para guardar la informacion.
    const submitForm = async event => {
        event.preventDefault()

        setIsSaving(true);
        let fecha = fecha_ingreso.getFullYear() + '/' + (fecha_ingreso.getMonth() + 1) + '/' + fecha_ingreso.getDate();
        await axios.post('/api/empleados/', {
            primer_apellido,
            segundo_apellido,
            primer_nombre,
            otros_nombre,
            contry_id,
            type_id,
            idnumber,
            fecha_ingreso: fecha,
            area_id
        })
            .then(function (response) {
                Swal.fire({
                    icon: 'success',
                    title: 'Se guardo correctamente',
                    showConfirmButton: false,
                    timer: 1500
                })
                setIsSaving(false)
                setPrimer_apellido('')
                setSegundo_apellido('')
                setPrimer_nombre('')
                setOtros_nombre('')
                setContry_id('')
                setType_id('')
                setIdnumber('')
                setFecha_ingreso('')
                setArea_id('')
                Router.push("/dashboard")
            })
            .catch(function (error) {
                console.log(error)
                Swal.fire({
                    icon: 'error',
                    title: 'No se pudo guardar!',
                    showConfirmButton: false,
                    timer: 1500
                })
                setIsSaving(false)
            })
    }

    return (
        <AppLayout>
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">
                            <h2 className="pt-4 text-2xl text-center">Crear Empleado</h2>

                            <form onSubmit={submitForm}>
                                <div className="mt-4">
                                    <Label htmlFor="primer_apellido">Primer Apellido</Label>
                                    <Input
                                        onChange={(event) => { setPrimer_apellido(event.target.value) }}
                                        value={primer_apellido}
                                        type="text"
                                        id="primer_apellido"
                                        name="primer_apellido"
                                        maxlength="20"
                                        required />
                                </div>
                                <div className="mt-4">
                                    <Label htmlFor="segundo_apellido"
                                        className="inline-flex items-center">Segundo Apellido</Label>
                                    <Input
                                        value={segundo_apellido}
                                        onChange={(event) => { setSegundo_apellido(event.target.value) }}
                                        type="text"
                                        id="segundo_apellido"
                                        name="segundo_apellido"
                                        maxlength="20"
                                        required />
                                </div>
                                <div className="mt-4">
                                    <Label htmlFor="primer_nombre"
                                        className="inline-flex items-center">Primer Nombre</Label>
                                    <Input
                                        value={primer_nombre}
                                        onChange={(event) => { setPrimer_nombre(event.target.value) }}
                                        type="text"

                                        id="primer_nombre"
                                        name="primer_nombre"
                                        maxlength="20"
                                        required />
                                </div>
                                <div className="mt-4">
                                    <Label htmlFor="otros_nombre"
                                        className="inline-flex items-center">Otros Nombres</Label>
                                    <Input
                                        value={otros_nombre}
                                        onChange={(event) => { setOtros_nombre(event.target.value) }}
                                        type="text"
                                        id="otros_nombre"
                                        name="otros_nombre"
                                        maxlength="50"
                                    />
                                </div>
                                <div className="mt-4">
                                    <Label htmlFor="contry_id"
                                        className="inline-flex items-center">Pais</Label>
                                    <Select
                                        value={paises.filter(function(option) {
                                            return option.value === contry_id;
                                          })}
                                        onChange={(event) => { setContry_id(event.value) }}
                                        options={paises}
                                        placeholder="Seleccione"
                                        id="type_id"
                                        name="type_id"
                                        required
                                    />
                                </div>
                                <div className="mt-4">
                                    <Label htmlFor="type_id"
                                        className="inline-flex items-center">Area</Label>
                                    <Select
                                        value={areas.filter(function(option) {
                                            return option.value === area_id;
                                          })}
                                        onChange={(event) => { setArea_id(event.value) }}
                                        options={areas}
                                        placeholder="Seleccione"
                                        id="type_id"
                                        name="type_id"
                                        required
                                    />
                                </div>
                                <div className="mt-4">
                                    <Label htmlFor="type_id"
                                        className="inline-flex items-center">Tipo de identificacion</Label>
                                    <Select
                                        value={typeid.filter(function(option) {
                                            return option.value === type_id;
                                          })}
                                        onChange={(event) => { setType_id(event.value) }}
                                        options={typeid}
                                        id="type_id"
                                        name="type_id"
                                        placeholder="Seleccione"
                                        required
                                    />
                                </div>
                                <div className="mt-4">
                                    <Label htmlFor="idnumber">Numero de identificacion</Label>
                                    <Input
                                        onChange={(event) => { setIdnumber(event.target.value) }}
                                        value={idnumber}
                                        type="number"
                                        id="idnumber"
                                        name="idnumber"
                                        required />
                                </div>
                                <div className="mt-4">
                                    <Label htmlFor="fecha_ingreso">Fecha de ingreso</Label>
                                    <DatePicker
                                        className=' w-full rounded-md shadow-sm border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50`'
                                        selected={fecha_ingreso}
                                        minDate={mesAnterior}
                                        maxDate={hoy}
                                        format='yyyy/MM/dd'
                                        onChange={(date) => {
                                            setFecha_ingreso(date)
                                        }}
                                        id="fecha_ingreso"
                                        name="fecha_ingreso"
                                        required
                                    />
                                </div>
                                <div className="mt-6">
                                    <Button
                                        disabled={isSaving}
                                        className="ml-3">
                                        Guardar
                                    </Button>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}

export default Crear;