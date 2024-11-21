import { CREDENTIALS_GOOGLE, SCOPE_GOOGLE } from "@/database"
import { google } from "googleapis"

const authGoogle = new google.auth.GoogleAuth({
  keyFile: CREDENTIALS_GOOGLE,
  scopes: SCOPE_GOOGLE
})

export { authGoogle }