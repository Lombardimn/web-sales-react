import { MainFormProps } from "@/interfaces"
import { useState } from "react"
import { useFormContext } from "react-hook-form"

/* temporario para pruebas */
const productOptions = [
  { id: 1, name: "Producto A", price: 100, format: ["Formato A", "Formato B"] },
  { id: 2, name: "Producto B", price: 200, format: ["Formato C", "Formato D"] },
  { id: 3, name: "Producto C", price: 300, format: ["Formato E", "Formato F"] },
]

const FormProduct = () => {
  const { register, formState: { errors } } = useFormContext<MainFormProps>()
  const [ selectedFormat, setSelectedFormat ] = useState<string[]>([])

  const handleFormatChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectProduct = productOptions.find(
      (product) => product.name === e.target.value
    )
    
    setSelectedFormat(selectProduct?.format || []) // Actualiza el estado con el formato seleccionado
  }

  return (
    <div>
      <div className="form-content">
        <label htmlFor="productName" className="label">Producto</label>
        <select 
          id="productName"
          {...register("formProduct.productName", { required: "Selecciona un producto" })}
          onChange={handleFormatChange}
          className="input-text"
        >
          <option value="">Seleccione un producto</option>
          {
            productOptions.map(({ id, name }) => (
              <option key={id} value={name}>{name}</option>
            ))
          }
        </select>
      </div>

      <div className="form-content">
        <p className="label">Presentación</p>
        <div className="radio-group-r">
          {
            selectedFormat.length > 0 
              ? ( selectedFormat.map((format, index) => (
                  <div key={index} className="radio">
                    <input 
                      type="radio" 
                      id={`format-${index}`} 
                      value={format}
                      {...register(`formProduct.format`, { required: "Seleccione una presentación" })} // Registrar como array
                    />
                    <label htmlFor={`format-${index}`}>{format}</label>
                  </div>
                ))) 
              : ( <p>Seleccione un producto para ver las presentaciones.</p>)
          }
        </div>
        {errors.formProduct?.format && <span className="alert-form">{errors.formProduct.format.message}</span>}
      </div>

      <div className="form-value">
        <label htmlFor="quantity" className="label">Cantidad</label>
        <input 
          type="number" 
          id="quantity"
          {...register("formProduct.quantity",
            { 
              required: "La cantidad es requerida",
              min: { 
                value: 1,
                message: "La cantidad debe ser mayor a 0"
              },
              validate: (value) => Number.isInteger(Number(value)) || "Debe ser un número entero",
            }
          )}
          className="input-text"
        />

        <label htmlFor="price" className="label">Precio</label>
        <input 
          type="number" 
          id="price"
          {...register("formProduct.price")}
          className="input-enabled"
          disabled
        />
      </div>
      
      {errors.formProduct?.quantity && <span className="alert-form">{errors.formProduct.quantity.message}</span>}
    </div>
  )
}

export { FormProduct }