import "./styles/EnterpriseCreationForm.css"

function EnterpriseInput({ labelv, namev, placeholderv }) {
  return (
    <div>
      <label className="Enterprise__labelStyle">{labelv}</label>
      <input type="text" name={namev} placeholder={placeholderv} />
    </div>
  );
}

export default function EnterpriseCreationForm() {
  return (
    <>
      <div className="Enterprise__oneColumn">
        <EnterpriseInput
          labelv={"Nombre de la empresa"}
          namev={"nombre"}
          placeholderv={"nombre(s)"}
        />
      </div>

      <div className="Enterprise__oneColumn">
        <EnterpriseInput
          labelv={"Dirección de la empresa"}
          namev={"direccion"}
          placeholderv={"direccion"}
        />
      </div>

      <div className="Enterprise__oneColumn">
        <div>
          <label className="Enterprise__labelStyle">Número de empleados participantes</label>
          <input type="number" name="num_empleados" placeholder="10" />
        </div>
      </div>

    </>
  )
}
