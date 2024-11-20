import { AppLayout } from "@/AppLayout"
import { Icon } from "@/components"

const NotFound = () => {
  return (
    <AppLayout>
      <section className="flex flex-col items-center">
        <h2 className="">Lo siento...</h2>
        <p className="">No se encontro la pagina solicitada</p>
      </section>
      <a href="/" className="flex gap-2 mt-4">
        <Icon icon="arrowLeft" size="24" />
        Volver al inicio
      </a>
      <section className="flex flex-col items-center">
        <img 
          src="./src/assets/404.svg" 
          alt="Un robot en el suelo al que se le salieron piezas internas y tiene un cartel indicando el error 404 de pagina no encontrada." 
          width="700"
          height="700"
          className="h-96 w-96 m-auto"
        />
      </section>
    </AppLayout>
  )
}

export { NotFound }