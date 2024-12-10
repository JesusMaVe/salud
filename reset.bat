@echo off
echo Deteniendo y eliminando contenedores...
docker-compose down -v

echo Limpiando recursos no utilizados...
docker system prune -f

pause

