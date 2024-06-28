import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class RoleMiddleware {
  public async handle({auth,response}: HttpContextContract, next: () => Promise<void>, roles: string[]) {
    try{
      await auth.check()
    }    
    catch{
      return response.unauthorized({message:"No tienes permiso para acceder"})
    }

    const user = auth.user!

    if(!user){
      return response.unauthorized({message:"No tienes permiso para acceder"})
    }

    await user.load('role')

    console.log(user.toJSON())

    if(!roles.includes(user.role.slug)){
      return response.unauthorized({message:"No tienes permiso para acceder"})
    }

    await next()
  }
}
