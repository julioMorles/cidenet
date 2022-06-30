import AppLayout from '@/components/Layouts/AppLayout'
import Head from 'next/head'
import React, { useState, useEffect } from 'react';
import axios from "@/lib/axios"
import Swal from 'sweetalert2'
import Link from 'next/link';


const Dashboard = () => {

    const [empleados, setEmpleados] = useState([])
    useEffect(() => {
        fetchEmpleados()
    }, [])
    const fetchEmpleados = () => {
        axios.get('/api/empleados')
            .then(function (response) {
                setEmpleados(response.data);
            })
            .catch(function (error) {
                console.log(error);
            })
    }
    const handleDelete = (id) => {
        Swal.fire({
            title: 'Estas seguro de eliminar el empleado?',
            text: "Estas eliminando un empleado!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si'
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete('/api/empleados/' + id)
                    .then(function (response) {
                        Swal.fire({
                            icon: 'success',
                            title: 'Se elimino correctamente!',
                            showConfirmButton: false,
                            timer: 1500
                        })
                        fetchEmpleados()
                    })
                    .catch(function (error) {
                        Swal.fire({
                            icon: 'error',
                            title: 'An Error Occured!',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    });
            }
        })
    }

    return (
        <AppLayout
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Empleados
                </h2>
            }>

            <Head>
                <title>Cidenet - Empleados</title>
            </Head>

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">
                            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                        <tr>
                                            <th scope="col" className="px-6 py-3">
                                                Numero ID
                                            </th>
                                            <th scope="col" className="px-6 py-3">
                                                Nombre
                                            </th>
                                            <th scope="col" className="px-6 py-3">
                                                Apellido
                                            </th>
                                            <th scope="col" className="px-6 py-3 ">
                                                Acciones
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {empleados?.map((empleado, key) => {
                                            return (
                                                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700" key={key}>
                                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">{empleado.idnumber}</th>
                                                    <td className="px-6 py-4">{empleado.primer_nombre}</td>
                                                    <td className="px-6 py-4">{empleado.primer_apellido}</td>
                                                    <td className="px-6 py-4 text-right">
                                                        <Link
                                                            className="px-6"
                                                            href={'/empleado/'+ empleado.id}>
                                                            ver/Editar
                                                        </Link>
                                                        
                                                        <button
                                                            onClick={() => handleDelete(empleado.id)}
                                                            className="px-6  ">
                                                            Eliminar
                                                        </button>
                                                    </td>
                                                </tr>
                                            )
                                        })}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AppLayout>
    )
}

export default Dashboard
