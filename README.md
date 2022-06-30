# cidenet
Prueba tecnica.

# Laravel Breeze - Next.js Edition 🏝️

## Introduction

This repository is an implementing of the [Laravel Breeze](https://laravel.com/docs/starter-kits) application / authentication starter kit frontend in [Next.js](https://nextjs.org). All of the authentication boilerplate is already written for you - powered by [Laravel Sanctum](https://laravel.com/docs/sanctum), allowing you to quickly begin pairing your beautiful Next.js frontend with a powerful Laravel backend.

## Official Documentation

### Installation

Para la instalacion del la prueba porfavor realice los siguientes pasos:

Dentro de la carpeta `api/` ejecute composer para instalar todas la dependencias

```bash
# Install all modules for laravel
cd api
composer install
```
Despues configure en el archivo `.env` que de la misma carpeta api, la configuracion de Mysql

```bash
copy .env.example .env
```
Recuerde colocar las rutas del fron y del back en caso de cambiarlas.
 
Despues seguir con las configuracions basicas de laravel.
```bash
# Serve the application...
php artisan key:generate
php artisan migrate
php artisan db:seed --class=DatabaseSeeder
php artisan serve
```

Despues, Clone este repo e installe las dependencias con  `yarn install` o `npm install`.  Copie el archivo `.env.example` a `.env.local` y agrege la ruta del backend

```
NEXT_PUBLIC_BACKEND_URL=http://localhost:8000
```

por ultimo, ejecute el fron via  `npm run dev`. La aplicacion estara en  `http://localhost:3000`:

```
npm run dev
```