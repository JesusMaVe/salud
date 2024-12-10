#!/bin/bash

# Construir los contenedores sin usar caché
docker-compose build --no-cache

# Iniciar los contenedores en segundo plano
docker-compose up -d

