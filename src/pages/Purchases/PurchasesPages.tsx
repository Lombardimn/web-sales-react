import { AppLayout } from "@/AppLayout"
import { Button } from "@/components"
import { MainFormProps } from "@/interfaces"
import { FormProduct, FormUser } from "@/pages"
import { FormProvider, SubmitHandler, useForm } from "react-hook-form"

const PurchasesPages = () => {
  const methods = useForm<MainFormProps>()

  const onSubmit: SubmitHandler<MainFormProps> = (data) => {
    console.log("Form Data:", data);
  }

  return (
    <AppLayout>
      <h2 className="font-bold">Formulario de Compras</h2>

      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <FormUser />
          <FormProduct />

          <Button 
            type="submit" 
            label="Guardar datos del formulario" 
            className="btn-primary"
          >
            Guardar
          </Button>
        </form>
      </FormProvider>
    </AppLayout>
  )
}

export { PurchasesPages }