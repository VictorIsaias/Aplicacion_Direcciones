
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'
import { DateTime } from 'luxon';

export default class ApiToken extends BaseModel {

  static get table() {
    return 'api_tokens';
  }

  @column({ isPrimary: true })
  public id: number;

  @column()
  public userId: number;

  @column()
  public token: string;

  @column()
  public type: string;

  @column()
  public isRevoked: boolean;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime;
}



