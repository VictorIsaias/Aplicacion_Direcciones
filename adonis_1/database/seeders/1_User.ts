import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import User from 'App/Models/User'

export default class extends BaseSeeder {
  public async run () {
    await User.createMany([
      {email:'vickyctor.2019@gmail.com',password:'contrasena',roleId:1,nickname:"vic",phone:"8714446301",name:"Victor",lastname:"Castrejon",age:19,birthdate:new Date(2004,6,30),active:true},
      {email:'pedrito.silva@gmail.com',password:'contrasena2',roleId:2,nickname:"pedrito",phone:"8714446302",name:"Pedro",lastname:"Silva",age:23,birthdate:new Date(2000,1,21),active:true},
      {email:'miller.viktor@gmail.com',password:'contrasena3d',roleId:2,nickname:"miller",phone:"8714446303",name:"Victor",lastname:"Cabello",age:21,birthdate:new Date(2002,4,23),active:true},
      {email:'roberto.angel@gmail.com',password:'contrasena4',roleId:2,nickname:"ibañez",phone:"8714446304",name:"Roberto",lastname:"Ibañez",age:26,birthdate:new Date(1997,7,12),active:true},
      {email:'isaias.castrejonrdz@gmail.com',password:'contrasena5',roleId:2,nickname:"vic2",phone:"8714446305",name:"Victor",lastname:"Rodriguez",age:19,birthdate:new Date(2004,6,30),active:true},
    ])
  }
}
