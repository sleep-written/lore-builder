#!/bin/sh
clear
if [ $1 = "dist" ]; then
    # Eliminar el primer elemento de los argumentos
    shift

    # Volver a transpilar
    npm run build
else
    # Set the env variable to use the root path
    export RESOLVE_SRC=true
fi

# Ejecutar el CLI de TypeORM
echo \> Ejecutando TypeORM CLI...
npx bb-path-alias node_modules/typeorm/cli.js $@