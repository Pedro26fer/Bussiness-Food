import * as bcrypt from 'bcryptjs'

export function hashPassword(password: string) : string {
    const saltOrRounds = 10
    const hash = bcrypt.hashSync(password, saltOrRounds)
    return hash
}