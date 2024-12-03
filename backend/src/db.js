import { google } from 'googleapis'
import { CREDENTIALS_GOOGLE, SCOPE_GOOGLE } from './config.js'

const authGoogle = new google.auth.GoogleAuth({
  keyFile: CREDENTIALS_GOOGLE,
  scopes: SCOPE_GOOGLE,
})

export const db = google.sheets({ version: 'v4', auth: authGoogle })
