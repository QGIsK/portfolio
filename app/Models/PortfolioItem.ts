import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class PortfolioItem extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public shown: boolean

  @column()
  public mdUp: string

  @column()
  public mdDown: string

  @column()
  public name: string

  @column()
  public about: string

  @column()
  public image: string

  @column()
  public url: string

  @column()
  public order: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
