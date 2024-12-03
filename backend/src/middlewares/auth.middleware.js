import jwt from "jsonwebtoken"
import { SECRET_KEY } from "../config.js"

const isAuth = (req, res, next) => {
  const token = req.cookies.token

  if (!token) {
    return res.status(401).json({
      status: "error",
      message: "Unauthorized"
    })
  }

  jwt.verify(token, SECRET_KEY, (err, decoded) => {
    if (err) {
      return res.status(401).json({
        status: "error",
        message: "Unauthorized"
      })
    }

    req.userId = decoded.id
  })

  next()
}

export { isAuth }