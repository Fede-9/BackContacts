const { sequelize, Sequelize, user: User } = require('../../models');
import { generarHash, compararHash } from './hash';
import { generatetoken, decodeToken } from '../login/index.js'


// seguir con login
const login = async (req, res) => {
   
    const {name, email, pass} = req.body

    let validate = name && typeof name === 'string' && name.length > 3
    validate &&= email && typeof email === 'string' 
    validate &&= pass && typeof pass === 'string' && pass.length > 2


    if (!validate){
        return res.status(400).json({info: 'credenciales incorrectas'})
    }

 
    const onename = await User.findOne({
        where : {
            name
        }
    })

    let login = false

    if (onename){
        login = await compararHash(pass, onename.pass)   
    }

    const token = generatetoken(email)
    // const decode = decodeToken(token)

    return res.json({info:'OK', data:onename, login, token})

}



const getUsuario = async (req, res) => {
    const lista = await User.findAll({});

    if (lista.length === 0) {
        return res.json({ message: 'No hay usuarios disponibles' });
    }

    return res.json({ data: lista });
};



const getUsuarioById = async (req, res) => {
    const { id } = req.params;
    const usuario = await User.findByPk(id);

    if (!usuario) {
        return res.status(404).json({ message: 'El usuario no existe' });
    }

    return res.json(usuario);
};


const addUsuario = async (req, res) => {

    try {
        const {name, email, pass} = req.body; 

        let verificado = name && pass && email;
        
        if (!verificado){
            return res.status(400).json({info: 'Debe ingresar name, email y pass'})
        }

        const passHasheada = await generarHash(''+pass)
    
        const usuario = await User.create({
            name,
            email,
            pass: passHasheada
        })
    
        return res.status(201).json({
            data: usuario
        })
        
    } catch (error) {
        return res.status(400).json({info:'usuario existente'})
    }

}


const deleteUsuario = async (req, res) => {
    const { id } = req.params;
    const usuario = await User.findByPk(id)

    try {
        if (!usuario){
            return res.status(404).json({mensaje: 'Usuario no encontrado'})
        }
        await usuario.destroy()
        res.json({mensaje: 'Usuario eliminado'})

    } catch (error){
        res.status(500).json({mensaje: 'Error al eliminar usuario'})
    }
   
}

const updateUsuario = async (req, res) => {
    const { id } = req.params;
    const usuario = await User.findByPk(id);

    try {
        if (!usuario){
            return res.status(404).json({mensaje: 'Usuario no encontrado'})
        }
        usuario.name = req.body.name
        usuario.email = req.body.email
        usuario.pass = await generarHash(req.body.pass)
        usuario.save()
        res.json({mensaje: 'Usuario actualizado'})

    } catch (error){
        return res.status(500).json({mensaje: 'Error al actualizar usuario'})
    }
}


module.exports = {
    getUsuario,
    getUsuarioById,
    addUsuario,
    deleteUsuario,
    updateUsuario,
    login
}


  