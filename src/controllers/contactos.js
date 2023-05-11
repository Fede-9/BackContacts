const { sequelize, Sequelize, contact: Contact } = require('../../models');




const getContacto = async (req, res) => {
    const lista = await Contact.findAll({})
    return res.json({data:lista})
}


const getContactoById = async (req, res) => {
    const { id } = req.params;
    const contacto = await Contact.findByPk(id)
    return res.json(contacto)
}



const addContacto = async (req, res) => {
    let body = req.body; 

    let verificado = body.name;

    if (!verificado){
        return res.status(400).json({info: 'parametro incorrectos'})
    }

    const contacto = await Contact.create(body)

    return res.status(201).json({
        data: contacto
    })
}

const deleteContacto = async (req, res) => {
    const { id } = req.params;
    const contacto = await Contact.findByPk(id)

    try {
        if (!contacto){
            return res.status(404).json({mensaje: 'Contacto no encontrado'})
        }
        await contacto.destroy()
        res.json({mensaje: 'Contacto eliminado'})

    } catch (error){
        res.status(500).json({mensaje: 'Error al eliminar contacto'})
    }
   
}

const updateContacto = async (req, res) => {
    const { id } = req.params;
    const contacto = await Contact.findByPk(id);

    try {
        if (!contacto){
            return res.status(404).json({mensaje: 'Usuario no encontrado'})
        }
        contacto.name = req.body.name
        contacto.phone = req.body.phone
        // contacto.date = new Date()
        contacto.favourite = req.body.favourite
        contacto.save()
        res.json({mensaje: 'Contacto actualizado'})

    } catch (error){
        return res.status(500).json({mensaje: 'Error al actualizar contacto'})
    }
}


module.exports = {
    getContacto,
    getContactoById,
    addContacto,
    deleteContacto,
    updateContacto
}