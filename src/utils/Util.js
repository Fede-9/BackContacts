import { User } from '../../models'

 
async function removeAllUser(){
    await User.destroy({
        truncate: true
    })
}

async function existUser(id){
    const user = await User.findOne({
        where: {
            name
        }
    })

    return user != undefined && user != null
}




module.exports = {
    removeAllUser,
    existUser
}