import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import User from './User'

export default class Address extends BaseModel {
  @column({ isPrimary: true })
  public id: number
  
  @column()
  public street: string
  
  @column()
  public suburb: string
  
  @column()
  public city: string
  
  @column()
  public state: string
  
  @column()
  public country: string
  
  @column()
  public zip_code: string
  
  @column()
  public longitude: number
  
  @column()
  public latitude: number
  
  @column()
  public userId: number
  
  @belongsTo(()=>User)
  public users: BelongsTo<typeof User>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
