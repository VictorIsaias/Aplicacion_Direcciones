 import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'
import Role from 'App/Models/Role'


export default class UsersController {
    public async register({request, response}: HttpContextContract){
        const {name,lastname,birthdate,email,password,nickname,phone} = request.only(['name','lastname','age','birthdate','email','password','nickname','phone'])
        const role = await Role.findByOrFail('slug','support')
        const age = 19
        const active = true;
        const user = await User.create({name,lastname,age,birthdate,active,email,nickname,phone, password, roleId:role.id})

        return response.json({user})
    }

    public async login({request, auth, response}: HttpContextContract){
        const {input, password} = request.only(['input','password'])

        try { 
            const token = await auth.use('api').attempt(input,password)
            const user = auth.user;
            return response.json({token:token,user:user})
        }
        catch{
            return response.badRequest('Invalid credentials')
        }
    }

    public async show({response,auth}: HttpContextContract){
        return response.json({user:auth.user})
    }
    public async logout({auth}: HttpContextContract){
        await auth.logout()
    }
}
