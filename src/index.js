const express = require('express')

const routerUsuarios = require('./routes/usuarios.js')
const routerContactos = require('./routes/contactos.js')

const app = express();
app.use(express.json())

app.use('/usuarios', routerUsuarios)
app.use('/contactos', routerContactos)




const PORT = 3000

app.listen(PORT, () => {
console.log(`Server running on port ${PORT}`)
})

