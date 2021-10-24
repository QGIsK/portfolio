// import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import PortfolioItem from 'App/Models/PortfolioItem'

export default class DashboardController {
  public async index({ view }) {
    const items = await PortfolioItem.query().select('*').orderBy('order', 'asc')

    return view.render('dashboard/portfolio/index.edge', { items })
  }

  public async show({ params, view }) {
    const item = await PortfolioItem.findBy('id', params.id)

    return view.render('dashboard/portfolio/edit.edge', { item })
  }
}
