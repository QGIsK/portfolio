import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
  Route.on('login').render('auth/login').middleware('guest')
  Route.post('login', 'AuthController.login').as('authentication.login').middleware('guest')
  Route.post('logout', 'AuthController.destroy').as('authentication.destroy').middleware('auth')
}).prefix('/auth')
