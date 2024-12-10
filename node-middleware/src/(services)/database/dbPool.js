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



const oracledb = require('oracledb');

// Configuración de conexión
const dbConfig = {
  user: 'jesus',
  password: '123',
  connectString: 'localhost/XE',
};

// Inicialización del pool
let pool;

async function initPool() {
  try {
    pool = await oracledb.createPool({
      ...dbConfig,
      poolMin: 1,
      poolMax: 10,
      poolIncrement: 1,
    });
    console.log('Pool de conexiones a Oracle SQL inicializado');
  } catch (err) {
    console.error('Error al inicializar el pool:', err);
    throw err;
  }
}

async function getConnection() {
  if (!pool) {
    throw new Error('El pool de conexiones no ha sido inicializado');
  }
  return pool.getConnection();
}

async function closePool() {
  if (pool) {
    await pool.close();
    console.log('Pool de conexiones a Oracle SQL cerrado');
  }
}

module.exports = { initPool, getConnection, closePool };
