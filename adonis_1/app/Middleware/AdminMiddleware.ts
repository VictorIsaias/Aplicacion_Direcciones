import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Role from 'App/Models/Role'

export default class AdminMiddleware {
  public async handle({auth,response}: HttpContextContract, next: () => Promise<void>) {
    
    const user = auth.user
    if(!user){
      return response.json({message:"Usuario no logueado"})
    }
    const role = await Role.findByOrFail('slug','admin')

    if(user.roleId!=role.id){
      return response.json({message:"Usuario debe ser administrador"})
    }
    await next()
  }
}
