import { USER_SYSTEM, PASS_SYSTEM, SPREADSHEET_ID } from "../../../config.js"
import { generateJWT } from "../../../utilities/jwt.utility.js"
import { db } from "../../../db.js"

const readfile = async (req, res) => {
  const { user, pass } = req.body
  
  if (user !== USER_SYSTEM || pass !== PASS_SYSTEM) {
    return res.status(401).json({
      status: "error",
      message: "Unauthorized"
    })
  }

  const response = await db.spreadsheets.values.get({
    spreadsheetId: SPREADSHEET_ID,
    range: "Productos!A1:G100"
  })

  const rows = response.data.values

  if (rows && rows.length > 0) {
    const headers = rows[0] // Primera fila como encabezados
    const data = rows.slice(1).map((row) => {
      const rowData = {}
      headers.forEach((header, index) => {
        rowData[header] = row[index]
      })
    
      return rowData
    })
    
    const token =await generateJWT({
      id: USER_SYSTEM,
      password: PASS_SYSTEM
    })
    
    res.cookie(
      'token',
      token,
      {
        httpOnly: true,
        //secure: true
        sameSite: 'none',
        maxAge: 24 * 60 * 60 * 1000 // 1 day
      }
    )

    res.send(data)

  } else {
    console.log('No se encontraron datos en la hoja.')
    return res.status(409).json({ 
      message: 'No se pudo obtener la información.' 
    })
  }
}

const writefile = (req, res) => {
  res.send("escribiendo en la hoja")
}

const updatefile = (req, res) => {  
  res.send("actualizando la hoja")  
}

const deletefile = (req, res) => {
  res.send("borrando la hoja")
}

export {
  readfile,
  writefile,
  updatefile,
  deletefile
}
