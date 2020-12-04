import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'

dotenv.config()

export async function generateToken(data) {
  const token = jwt.sign({ data }, process.env.GLOBAL_SALTKEY, {
    expiresIn: '1d',
  })

  return token
}

export async function decodeToken(token) {
  return jwt.decode(token, process.env.GLOBAL_SAL_KEY)
}

export function verifyToken(token) {
  return jwt.verify(token, process.env.GLOBAL_SAL_KEY, (error, decode) => {
    if (error) return { error }
    return { decode }
  })
}
