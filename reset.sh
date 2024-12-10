#!/bin/bash

# Detener y eliminar contenedores, redes y volúmenes definidos en docker-compose.yml
docker-compose down -v

# Limpiar imágenes y contenedores no utilizados
docker system prune -f

