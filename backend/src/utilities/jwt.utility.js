import { SECRET_KEY } from '../config.js'
import jwt from 'jsonwebtoken'

const generateJWT = (payload) => {
  return new Promise((res, rej) => {
    jwt.sign(
      payload,
      SECRET_KEY,
      {
        expiresIn: '1d'
      },
      (err, token) => {
        if (err) rej(err)
          res(token)
      }
    )
  })
}

export { generateJWT }