import { DateTime } from 'luxon'
import Hash from '@ioc:Adonis/Core/Hash'
import Role from './Role'
import { column, beforeSave, BaseModel , belongsTo,BelongsTo, hasMany, HasMany} from '@ioc:Adonis/Lucid/Orm'
import Address from './Address'

export default class User extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public email: string

  @column({ serializeAs: null })
  public password: string

  @column()
  public rememberMeToken: string | null

  @column()
  public name: string

  @column()
  public lastname: string

  @column()
  public age: number

  @column()
  public birthdate: Date

  @column()
  public active: boolean

  @column()
  public roleId: number
  
  @column()
  public nickname: string
  
  @column()
  public phone: string
  
  @belongsTo(()=>Role)
  public role: BelongsTo<typeof Role>
  
  @hasMany(()=> Address)
  public addresses: HasMany<typeof Address>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @beforeSave()
  public static async hashPassword (user: User) {
    if (user.$dirty.password) {
      user.password = await Hash.make(user.password)
    }
  }
}
