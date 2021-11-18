import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
  Route.post('/contact', 'ContactController.store')

  Route.group(() => {
    Route.post('login', 'AuthController.login').as('auth.login').middleware('guest')
    Route.post('logout', 'AuthController.destroy').as('auth.logout').middleware('auth')
  }).prefix('auth')

  Route.group(() => {
    Route.get('/', 'PortfolioController.index')
  }).prefix('portfolio-items')
}).prefix('/api')
