import dotenv from 'dotenv'
dotenv.config()

export const PORT = process.env.PORT
export const CREDENTIALS_GOOGLE = process.env.CREDENTIALS_GOOGLE
export const SCOPE_GOOGLE = process.env.SCOPE_GOOGLE
export const SPREADSHEET_ID = process.env.SPREADSHEET_ID
export const SECRET_KEY = process.env.KEY_TOKEN
export const USER_SYSTEM = process.env.USER_SYSTEM
export const PASS_SYSTEM = process.env.PASS_SYSTEM