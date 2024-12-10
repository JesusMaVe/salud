/* Copyright (c) 2018, 2023, Oracle and/or its affiliates. */

/******************************************************************************
 *
 * This software is dual-licensed to you under the Universal Permissive License
 * (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl and Apache License
 * 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose
 * either license.
 *
 * If you elect to accept the software under the Apache License, Version 2.0,
 * the following applies:
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * NAME
 *   connectionpool.js
 *
 * DESCRIPTION
 *   Shows connection pool usage.  Connection pools are recommended
 *   for applications that use a lot of connections for short periods.
 *
 *   Other connection pool examples are in sessionfixup.js and webapp.js.
 *   For a standalone connection example, see connect.js
 *
 *   In some networks forced pool termination may hang unless you have
 *   'disable_oob=on' in sqlnet.ora, see
 *   https://node-oracledb.readthedocs.io/en/latest/user_guide/connection_handling.html#limiting-the-time-taken-to-execute-statements
 *
 *   In production applications, set poolMin=poolMax (and poolIncrement=0)
 *
 *****************************************************************************/

const { getConnection } = require('./dbPool');



async function insertResultsTransaction(jsonData) {
    let connection;

    try {
        connection = await getConnection();

        // Preparar la consulta de inserción
        const query = `
        INSERT INTO res_valid (resv_id, resv_estatus, resv_puntaje) 
        VALUES (:resv_idv, :resv_estatusv, :resv_puntajev)
        `

        // Recorrer las secciones del JSON y realizar las inserciones
        const serverBody = jsonData.SERVER_BODY;

        for (const section in serverBody) {
            const { status, score } = serverBody[section];

            await connection.execute(query,
                {
                    resv_idv: section,        // Id de la sección (e.g., section2)S
                    resv_estatusv: status,    // Estado de la sección (e.g., valid)
                    resv_puntajev: score,     // Puntaje (e.g., regular)
                },
                { autoCommit: false }
            )
        }

        // Confirmar las transacciones
        await connection.commit();
        console.log('Datos insertados correctamente en resultado_validado');

    } catch (err) {
        console.error('Error al insertar datos:', err);

        // Si ocurre un error, revertir los cambios
        if (connection) {
            await connection.rollback();
        }
        throw err;
    } finally {
        if (connection) {
            // Cerrar la conexión
            await connection.close();
        }
    }
}

async function insertResultsCallback(jsonData) {
    try {
        await insertResultsTransaction(jsonData)
    } catch (err) {
        console.error('Error en la ejecución:', err)
    }
}

module.exports = { insertResultsCallback }