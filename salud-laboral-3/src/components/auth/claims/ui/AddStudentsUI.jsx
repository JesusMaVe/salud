import { signUpService, specialSignUpService } from '../../../../lib/utils/auth'
import '../styles/SignIn.css'

function generatePassword() {
  const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789#$&?';
  const longitud = 10;
  let contrasena = '';

  for (let i = 0; i < longitud; i++) {
    const indiceAleatorio = Math.floor(Math.random() * caracteres.length);
    contrasena += caracteres[indiceAleatorio];
  }

  return contrasena;
}
const emailsArray = [
  {
    email: 'al500001@edu.uaa.mx',
    nombre: 'fabian',
    apellidoMaterno: 'rodriguez',
    apellidoPaterno: 'herrera',
    grupo: '1',
  },
  {
    email: 'al500002@edu.uaa.mx',
    nombre: 'fabian2',
    apellidoMaterno: 'rodriguez2',
    apellidoPaterno: 'herrera2',
    grupo: '2',
  },
]

export default function AddStudentsUI() {
  const accountCreationOrchestation = async (accountEmailArray) => {
    if (Array.isArray(accountEmailArray)) {
      let success = []
      accountEmailArray.map(async (account, i) => {
        const password = generatePassword()

        try {
          const createdUID = await specialSignUpService(account.email, password)

          if (createdUID !== null) {

            const temp = {
              ...account,
              contrasenia: password,
              id: i + 10,
              uid: createdUID,
            }

            const r = await fetch('http://localhost:8080/estudiante', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(temp),
            })
            const j = await r.json()
            const serverPayload = { ...j }
            console.log(serverPayload)
            if (Object.hasOwn(serverPayload, 'apellidoMaterno')) {
              success[i] = 'yes'
            }
          }
        } catch (err) {
          console.log('error in 3rd layer of auth services', err)
        } finally {
          console.log(`promise number ${i} resolved`)
        }
      })
      console.log('cuentas creadas con éxito', success.length)
    }
  }

  return (
    <div className='SignIn__Card'>
      <div className='SignIn__inputGroup'>
        <span className='SignIn__formTitle'>
          Crear usuarios segun los correos que brindaron los estudiantes
        </span>

        <span className='SignIn__inputLine'>
          <button
            type='button'
            className='SignIn__formBtn'
            onClick={() => {
              accountCreationOrchestation(emailsArray)
            }}
          >
            crear emails
          </button>
        </span>

      </div>
    </div>
  )
}
