import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
  Route.on('login').render('auth/login')
  Route.post('login', 'AuthController.login')
})
