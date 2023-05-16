const express = require('express')

const routerUsuarios = require('./routes/usuarios.js')
const routerContactos = require('./routes/contactos.js')

const app = express();
app.use(express.json())

app.use('/usuarios', routerUsuarios)
app.use('/contactos', routerContactos)




const PORT = 3000


if (process.env.NODE_ENV !== 'test') {
    app.listen(PORT, () => {
        console.log(`Server is running in port ${PORT}`)
    })
}


module.exports = app
