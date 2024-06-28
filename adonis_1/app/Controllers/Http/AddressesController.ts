import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Address from 'App/Models/Address'
import User from 'App/Models/User'

export default class AddressesController {
    public async addAddress({request, response,auth}:HttpContextContract){
        const {street,suburb,city,state,country,zip_code,latitude,longitude} = request.only(['street','suburb','city','state','country','zip_code','latitude','longitude'])
        const user = auth.user
        if(!user){
            return response.json({message:"Usuario no logueado"})
        }
        const userId = user.id
        const address = await Address.create({street,suburb,city,state,country,zip_code,userId,latitude,longitude})

        return response.json({address})
    }

    public async findAddresses({ response,auth}:HttpContextContract){
        const user = auth.user
        if(!user){
            return response.json({message:"Usuario no logueado"})
        }
        const addreses = await Address.query().where('user_id',user.id)
        
        return response.json({addreses})
    }

    public async allAddresses({ response}:HttpContextContract){
        const users = await User.query().preload('addresses')
        
        return response.json({users})
    }
}
