import { useGlobalContext } from "@/context"
import { Button, Icon } from "@/components"
import {
  Table,
  TableBody,
  TableHead,
  TableCell,
  TableHeaderCell,
  TableRow
} from "@tremor/react"

const ListOfProducts = () => {
  const { value } = useGlobalContext()

  return (
    <>
    {
      value.formProducts.length > 0 
        ? (
          <Table className="mt-6">
            <TableHead>
              <TableRow>
                <TableHeaderCell>Producto</TableHeaderCell>
                <TableHeaderCell>Formato</TableHeaderCell>
                <TableHeaderCell>Precio</TableHeaderCell>
                <TableHeaderCell>Cantidad</TableHeaderCell>
                <TableHeaderCell>Acciones</TableHeaderCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {value.formProducts.map((product) => (
                <TableRow key={product.productName}>
                  <TableCell>{product.productName}</TableCell>
                  <TableCell>{product.format}</TableCell>
                  <TableCell>$ {product.price}</TableCell>
                  <TableCell>{product.quantity}</TableCell>
                  <TableCell>
                    <Button type="button" label="Eliminar" className="btn-icon text-red-700">
                      <Icon icon="trash" size="24" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        )
        : (
          <div>No hay productos seleccionados</div>
        )
    }
    </> 
  )
}

export { ListOfProducts }