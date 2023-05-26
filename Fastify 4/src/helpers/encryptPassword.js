import bcrypt from "bcrypt"

export const encryptPassword=(password)=>{
    const salt = bcrypt.genSaltSync(10)
    const passwordEncriptada = bcrypt.hashSync(password,salt)
    return passwordEncriptada
}

// ACOPLADO A FASTIFY :)