import * as bcrypt from 'bcrypt'

export function hashPassword(password: string) : string {
    const saltOrRounds = 10
    const hash = bcrypt.hashSync(password, saltOrRounds)
    return hash
}