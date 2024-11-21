import { google } from "googleapis"
import { authGoogle } from "../api"
import { SPREAD_SHEET_ID } from "../config"

type SheetValue = string | number | boolean
type SheetRow = Record<string, SheetValue>

const readSheet = async (range: string): Promise<SheetRow[] | void> => {
  const sheets = google.sheets({ version: 'v4', auth: authGoogle }) // Crea una instancia de Sheets API

  try {
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: SPREAD_SHEET_ID,
      range
    })

    const rows = response.data.values
    if (rows && rows.length > 0) {
      const headers = rows[0] as string[] // Primera fila como encabezados
      const data = rows.slice(1).map((row) => {
        const rowData: SheetRow = {}
        headers.forEach((header, index) => {
          rowData[header] = row[index] as SheetValue
        })
        return rowData
      })

      return data
    } else {
      console.log('No se encontraron datos en la hoja.')
      return []
    }
  } catch (error) {
    console.error('Se ha producido un error en la lectura de la hoja -> :', error)
  }
}

export { readSheet }