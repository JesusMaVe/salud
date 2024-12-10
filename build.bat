@echo off
echo Construyendo imágenes sin usar cache...
docker-compose build --no-cache

echo Iniciando contenedores en segundo plano...
docker-compose up -d

pause

