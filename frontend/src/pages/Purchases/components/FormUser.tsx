import { MainFormProps } from "@/interfaces"
import { useFormContext } from "react-hook-form"

const FormUser = () => {
  const { register, formState: { errors } } = useFormContext<MainFormProps>()

  return (
    <div>
      <div className="form-content">
        <label htmlFor="userName" className="label">Nombre y Apellido</label>
        <input 
          type="text" 
          id="userName"
          autoComplete="on"
          className="input-text"
          {
            ...register('formUser.userName',
              {
                required: "El nombre y el apellido son requeridos",
                minLength: 3,
                maxLength: 50,
              }
            )
          } />

        {errors.formUser?.userName && <span className="alert-form">{errors.formUser.userName.message}</span>}

      </div>

      <div className="form-content">
        <label htmlFor="contactUser" className="label">Contato</label>
        <input 
          type="text"
          id="contactUser"
          autoComplete="off"
          className="input-text"
          {
            ...register('formUser.contactUser',
              {
                required: "El contacto es requerido",
                minLength: 3,
                maxLength: 50,
              }
            )
          }
          />

        {errors.formUser?.contactUser && <span className="alert-form">{errors.formUser.contactUser.message}</span>}

      </div>

      <div className="form-content">
        <label htmlFor="addressUser" className="label">Domicilio</label>
        <input 
          type="text"
          id="addressUser"
          autoComplete="off"
          className="input-text"
          {
            ...register('formUser.addressUser',
              {
                required: "El domicilio es requerido",
                minLength: 3,
                maxLength: 100,
              }
            )
          }
          />

        {errors.formUser?.addressUser && <span className="alert-form">{errors.formUser.addressUser.message}</span>}

      </div>

      <div className="form-content">
        <p className="label">¿Desea envio a domicilio?</p>
        <div className="radio-group">
          <div className="radio">
            <input 
              type="radio"
              id="deliveryYes"
              value='Si'
              {...register('formUser.delivery', { required: "Seleccione una opción" })}
            />
            <label htmlFor="deliveryYes">Si</label>
          </div>

          <div className="radio-group">
            <div className="radio">
              <input
                type="radio"
                id="deliveryNot"
                value='No'
                {...register('formUser.delivery', { required: "Seleccione una opción" })}
              />
              <label htmlFor="deliveryNot">No</label>
            </div>
          </div>

          {errors.formUser?.delivery && <span className="alert-form">{errors.formUser.delivery.message}</span>}
        </div>
      </div>
    </div>
  )
}

export { FormUser }