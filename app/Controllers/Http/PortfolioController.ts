// import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import PortfolioItem from 'App/Models/PortfolioItem'

export default class PortfolioController {
  public async index() {
    const items = await PortfolioItem.query().select('*').orderBy('order', 'asc')

    return items
  }
}
