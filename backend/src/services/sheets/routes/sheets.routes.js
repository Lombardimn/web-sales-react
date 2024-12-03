import { readfile, writefile, updatefile, deletefile } from "../controllers/sheets.controller.js"
import { isAuth } from "../../../middlewares/auth.middleware.js"
import Router from "express-promise-router"

const router = Router()

router.get(
  "/sheet",
  isAuth,
  readfile
)

router.post(
  "/sheet",
  isAuth,
  writefile
)

router.put(
  "/sheet/:id",
  isAuth,
  updatefile
)

router.delete(
  "/sheet/:id",
  isAuth,
  deletefile
)

export default router