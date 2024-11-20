import { MainFormProps } from "@/interfaces"
import { useFormContext } from "react-hook-form"

const FormProduct = () => {
  const { register } = useFormContext<MainFormProps>()

  return (
    <div>
      <div>
        <label htmlFor="productName">Producto</label>
        <input 
          type="text"
          id="productName"
          {...register('formProduct.productName')}
          />
      </div>
      <div>
        <label htmlFor="price">Precio</label>
        <input type="number" id="price" {...register('formProduct.price')} />
      </div>
      <div>
        <label htmlFor="quantity">Cantidad</label>
        <input type="number" id="quantity" {...register('formProduct.quantity')} />
      </div>
    </div>
  )
}

export { FormProduct }