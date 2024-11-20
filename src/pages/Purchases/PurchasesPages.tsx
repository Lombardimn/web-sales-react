import { AppLayout } from "@/AppLayout"
import { Button } from "@/components"
import { useGlobalContext } from "@/context"
import { MainFormProps } from "@/interfaces"
import { FormProduct, FormUser } from "@/pages"
import { FormProvider, SubmitHandler, useForm } from "react-hook-form"

const PurchasesPages = () => {
  const methods = useForm<MainFormProps>()
  const { setValue } = useGlobalContext()

  const onSubmit: SubmitHandler<MainFormProps> = (data) => {
    setValue((prev) => ({
      ...prev,
      formUser: data.formUser, // Mantiene los datos del usuario
      formProducts: [...prev.formProducts, data.formProduct], // Agrega el nuevo producto
    }))

    // Limpia solo el formulario de producto
    methods.reset({
      formProduct: {
        productName: "",
        price: 0,
        quantity: 0,
      },
      formUser: data.formUser, // Mantiene los datos del usuario
    })
  }

  return (
    <AppLayout>
      <h2 className="font-bold text-2xl pt-2 pb-3">Complete el formulario</h2>

      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <FormUser />
          <FormProduct />      
          <Button 
            type="submit" 
            label="Guardar datos del formulario" 
            className="btn-primary"
          >
            Agregar Producto
          </Button>
        </form>
      </FormProvider>
    </AppLayout>
  )
}

export { PurchasesPages }