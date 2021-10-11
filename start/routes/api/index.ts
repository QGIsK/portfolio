import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
  Route.post('/contact', 'ContactController.store')
  Route.get('/portfolio-items', 'PortfolioController.index')
}).prefix('/api')
