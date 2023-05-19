const jwt = require('jsonwebtoken')

const CLAVE_PRIVADA = 'claveSecreta'
const TOKEN_EXPIRATION = '24h'

// const payload = {
//     user: 'info@itecriocuarto.org'
// }



// generar el token
const generatetoken = (payload) => { 

    return jwt.sign({payload}, CLAVE_PRIVADA, {expiresIn: TOKEN_EXPIRATION})
}

// let token = generatetoken(payload)
// console.log(token)


// comprobar si el token es valido - mostrar la info que contiene el token
const decodeToken = (token) => {
    try {
        let decode = jwt.verify(token, CLAVE_PRIVADA)
        return decode

    } catch (error) {
        return null
    }
}

// console.log(decodeToken(token))


module.exports = {
    generatetoken,
    decodeToken
}