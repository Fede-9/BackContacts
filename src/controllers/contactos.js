const { sequelize, Sequelize, contact: Contact, user: User } = require('../../models');




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
    let { name, phone, userId } = req.body;

    if (!name || !userId) {
        return res.status(400).json({ info: 'parámetros incorrectos' });
    }

    try {
        const user = await User.findOne({ where: { id: userId  } });
        if (!user) {
            return res.status(404).json({ info: 'ID de usuario no encontrado' });
        }

        const contacto = await Contact.create({ name, phone, userId });

        return res.status(201).json({
            data: contacto
        });
    } catch (error) {
        console.error('Error al agregar el contacto:', error);
        return res.status(500).json({ info: 'Error interno del servidor' });
    }
};



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