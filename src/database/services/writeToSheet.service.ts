import { authGoogle, SPREAD_SHEET_ID } from "@/database"
import { google, sheets_v4 } from "googleapis"
import { GaxiosResponse } from "gaxios"

type SheetValue = string | number | boolean

const writeSheet = async (values: SheetValue[][], range: string): Promise<GaxiosResponse<sheets_v4.Schema$UpdateValuesResponse> | void> => {
  const sheets = google.sheets({ version: 'v4', auth: authGoogle }) // Crea una instancia de Sheets API
  const valueInputOption = 'USER_ENTERED' // Crea una instancia de ValueInputOption

  const resource = {
    values // Los datos que se van a escribir
  }

  try {
    const response = await sheets.spreadsheets.values.update({
      spreadsheetId: SPREAD_SHEET_ID,
      range,
      valueInputOption,
      requestBody: resource
    })

    return response // Devuelve la respuesta de la escritura de la hoja
  } catch (error) {
    console.error('Se ha producido un error en la escritura de la hoja -> :', error)
  }
}

export { writeSheet }