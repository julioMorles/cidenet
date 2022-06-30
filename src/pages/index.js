import Head from 'next/head'
import Link from 'next/link'
import { useAuth } from '@/hooks/auth'

export default function Home() {
    const { user } = useAuth({ middleware: 'guest' })

    return (
        <>
            <Head>
                <title>Cidenet</title>
            </Head>

            <div className="relative flex items-top justify-center min-h-screen bg-gray-100 dark:bg-gray-900 sm:items-center sm:pt-0">
                <div className="hidden fixed top-0 right-0 px-6 py-4 sm:block">
                    {user ?
                        <>
                            <Link href="/dashboard">
                                <a className="ml-4 text-sm text-gray-700 underline">
                                    Empleados
                                </a>
                            </Link>
                            <Link href="/empleado/crear">
                                <a className="ml-4 text-sm text-gray-700 underline">
                                    crear Empleados
                                </a>
                            </Link>
                        </>
                        :
                        <>
                            <Link href="/login">
                                <a className="text-sm text-gray-700 underline dark:text-white">Iniciar sesion</a>
                            </Link>

                            <Link href="/register">
                                <a className="ml-4 text-sm text-gray-700 dark:text-white underline">
                                    Registrar
                                </a>
                            </Link>
                        </>
                    }
                </div>

                <div className="max-w-6xl mx-auto sm:px-6 lg:px-8">
                    <div className="flex justify-center pt-8 sm:justify-start sm:pt-0">
                        <img width="200px" height="200px" src="https://www.cidenet.com.co/wp-content/uploads/2021/04/cidenet-software-a-la-medida-medellin.png"></img>
                    </div>

                    <div className="mt-8 bg-white dark:bg-gray-800 overflow-hidden shadow sm:rounded-lg">
                        <div className="grid grid-cols-1 md:grid-cols-2">
                            <div className="p-6">
                                <div className="flex items-center">

                                    <div className="ml-4 text-lg leading-7 font-semibold">
                                        <h2 className="underline text-gray-900 dark:text-white">
                                            Esta es una aplicacion de prueba
                                        </h2>
                                    </div>
                                </div>

                                <div className="ml-12">
                                    <div className="mt-2 text-gray-600 dark:text-gray-400 text-sm">
                                        Esta aplicacion es desarrollada con laravel (Breeze) y next.js para la compañia cidenet.
                                        Para ingresar <Link href="/register">
                                            <a className="ml-4 text-sm text-gray-900 underline dark:text-white">
                                                registrate
                                            </a>
                                        </Link>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
