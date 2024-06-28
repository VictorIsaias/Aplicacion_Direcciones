import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Address from 'App/Models/Address'

export default class extends BaseSeeder {
  public async run () {
    await Address.createMany([
      {street:"Torre de Londres",suburb:"Las Torres",city:"Torreon",state:"Coahuila",country:"Mexico",zip_code:"27085",latitude:128122.12129,longitude:121313.12121,userId:1},
      {street:"C. Porfirio Diaz",suburb:"Santa Fe",city:"Matamoros",state:"Coahuila",country:"Mexico",zip_code:"27400",latitude:32424.321,longitude:2142.2141421,userId:2},
      {street:"Torre Oriental",suburb:"Las Torres",city:"Torreon",state:"Coahuila",country:"Mexico",zip_code:"27085",latitude:12421.42241,longitude:24142.42142,userId:3},
      {street:"Cedro",suburb:"Los sauces",city:"Torreon",state:"Coahuila",country:"Mexico",zip_code:"27277",latitude:1246463.36436,longitude:43434.12331,userId:4},
      {street:"Calz. Valle Oreinte",suburb:"Fracc. Latinoamericano",city:"Torreon",state:"Coahuila",country:"Mexico",zip_code:"27277",latitude:5121212.421421,longitude:86754.31289,userId:5},
    ])
  }
}
