const getProducts = (req, res) => {
  res.send("obteniendo productos")
}

const getProduct = (req, res) => {
  res.send("obteniendo un producto")
}

const createProduct = (req, res) => {
  res.send("creando un producto")
}

const updateProduct = (req, res) => {
  res.send("modificando un producto")
}

const deleteProduct = (req, res) => {
  res.send("borrando un producto")
}

export {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct
}
