import categoriesRoutes from "./services/categories/routes/category.routes.js"
import productsRoutes from "./services/products/routes/products.routes.js"
import sheetsRoutes from "./services/sheets/routes/sheets.routes.js"
import cookieParser from "cookie-parser"
import express from "express"
import morgan from "morgan"

const app = express()

// Middleware
app.use(morgan("dev"))
app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// Routers
app.get("/", (_, res) => {
  res.json("Server in running. Welcome to Web Sales API")
})

app.use("/api/v1", sheetsRoutes)
app.use("/api/v1", categoriesRoutes)
app.use("/api/v1", productsRoutes)

// Error handler
app.use((err, req, res, next) => {
  res.status(500).json({
    status: "error",
    message: err.message
  })
})

export default app