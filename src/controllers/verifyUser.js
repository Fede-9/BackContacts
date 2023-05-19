const validateUser = (req, res, next) => {
    try {
        const auth = req.headers.authorization

        const listaAuth = auth.split(' ');

        const token = listaAuth[1]

        if (!token) {
            res.status(403).json({
                message: " Acceso denegado "
            })
        }

        next()
    } catch (error) {
        console.log(error)
    }
}



module.exports = {
    validateUser
}
