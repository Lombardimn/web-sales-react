import { MainFormProps } from "@/interfaces"
import { useFormContext } from "react-hook-form"

const FormUser = () => {
  const { register, formState: { errors } } = useFormContext<MainFormProps>()

  return (
    <div>
      <div>
        <label htmlFor="userName">Nombre y Apellido</label>
        <input 
          type="text" 
          id="userName"
          autoComplete="on"
          {
            ...register('formUser.userName',
              {
                required: "El nombre y el apellido son requeridos",
                minLength: 3,
                maxLength: 50,
              }
            )
          } />

        {errors.formUser?.userName && <span>{errors.formUser.userName.message}</span>}

      </div>

      <div>
        <label htmlFor="contactUser">Contato</label>
        <input 
          type="text"
          id="contactUser"
          autoComplete="off" 
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

        {errors.formUser?.contactUser && <span>{errors.formUser.contactUser.message}</span>}

      </div>

      <div>
        <label htmlFor="addressUser">Domicilio</label>
        <input 
          type="text"
          id="addressUser"
          autoComplete="off"
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

        {errors.formUser?.addressUser && <span>{errors.formUser.addressUser.message}</span>}

      </div>

      <div>
        <p>¿Desea envio a domicilio?</p>
        <label htmlFor="deliveryYes">Si</label>
        <input 
          type="radio"
          id="deliveryYes"
          value='Si'
          {...register('formUser.delivery', { required: "Seleccione una opción" })}
        />
        <input
          type="radio"
          id="deliveryNot"
          value='No'
          {...register('formUser.delivery', { required: "Seleccione una opción" })}
        />
        <label htmlFor="deliveryNot">No</label>

        {errors.formUser?.delivery && <span>{errors.formUser.delivery.message}</span>}
      </div>
    </div>
  )
}

export { FormUser }