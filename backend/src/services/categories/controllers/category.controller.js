const getCategories = (req, res) => {
  res.send("obteniendo categorias")
}

const getCategory = (req, res) => {
  res.send("obteniendo una categoria")
}

const createCategory = (req, res) => {
  res.send("creando un categoria")
}

const updateCategory = (req, res) => {
  res.send("modificando un categoria")
}

const deleteCategory = (req, res) => {
  res.send("borrando un categoria")
}

export {
  getCategories,
  getCategory,  
  createCategory,
  updateCategory,  
  deleteCategory
}