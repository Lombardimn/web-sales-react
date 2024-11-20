import { Button, Icon, ListOfProducts, Modal, useModalContext } from "@/components"

const Navbar = () => {
  const { setState } = useModalContext()
  const handleOpenModal = (id: string) => {
    setState(id)
  }

  return (
    <nav className="navbar">
      <div className="fr-gap-2">
        <img src="./vite.svg" alt="Logo de la empresa" />
        <h1>Compras</h1>
      </div>
      <div className="content-btn">
        <Button 
          type="button"
          label="Carrito de Compras" 
          className="btn-icon" 
          ParentMethod={() => handleOpenModal('modalCart')}
        >
          <Icon icon="cart" size="24" />
        </Button>
      </div>

      <Modal title="Carrito de Compras" id="modalCart" className="modal">
        <ListOfProducts />
        <Button type="button" label="Confirmar Compra" className="btn-primary mt-3">
          Confirmar compra
        </Button>
      </Modal>
    </nav>
  )
}

export { Navbar }
