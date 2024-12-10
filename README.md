# Guia de instalacion de la aplicacion Salud laboral

## Manual de Instalación de Proyecto Salud Laboral

### Prerrequisitos

1. **Docker Desktop**: Asegúrate de que Docker Desktop esté instalado y en funcionamiento. Puedes descargarlo desde [la página oficial de Docker](https://www.docker.com/products/docker-desktop).

2. **Git**: Asegúrate de tener Git instalado para clonar el repositorio. Descárgalo desde [git-scm.com](https://git-scm.com/).

### Paso 1: Clonar el Repositorio

Abre un terminal (CMD, PowerShell, o Git Bash) y ejecuta el siguiente comando para clonar el repositorio:

```bash
git clone https://github.com/Asnodtx/RSO.git
```

### Paso 2: Navegar al Directorio del Proyecto

```bash
cd RSO
```

### Paso 3: Configurar las Variables de Entorno

El archivo `docker-compose.yml` ya contiene las configuraciones de entorno necesarias. Si es necesario, puedes modificar las variables de entorno directamente en este archivo o crear un archivo `.env` en la raíz del proyecto para manejar las credenciales de manera segura.

### Paso 4: Iniciar los Contenedores con Docker Compose

Ejecuta el siguiente comando en el directorio raíz del proyecto:

```bash
docker-compose up --build
```

Este comando hará lo siguiente:

- **Construirá e iniciará los servicios de frontend, backend y base de datos (Oracle XE)**.
- El backend dependerá de la base de datos para iniciar correctamente.
- Se asignarán los puertos necesarios para el acceso a cada servicio:
  - **Frontend**: `http://localhost:5174`
  - **Backend**: `http://localhost:8080`
  - **Oracle DB**: Puerto `1521`

### Paso 5: Verificar el Estado de los Contenedores

Para comprobar que los contenedores están en funcionamiento, ejecuta:

```bash
docker ps
```

Deberías ver una lista de los contenedores `frontend`, `backend`, y `oracle-db` en estado `UP`.

### Paso 6: Acceder a la Aplicación

- Abre un navegador web y accede al frontend en `http://localhost:5174`.
- La API de backend está disponible en `http://localhost:8080`.

### Solución de Problemas

- **Error de conexión a la base de datos**: Verifica que el contenedor de `oracle-db` esté `healthy` antes de que el backend intente conectarse.
- **Puertos en uso**: Si los puertos `5174`, `8080` o `1521` ya están en uso, modifica las asignaciones de puertos en `docker-compose.yml`.

### Paso 7: Detener los Contenedores

Cuando termines de usar la aplicación, puedes detener y eliminar los contenedores con:

```bash
docker-compose down
```

Esto detendrá los servicios y liberará los recursos.

---
