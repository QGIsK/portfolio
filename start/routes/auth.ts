import Route from '@ioc:Adonis/Core/Route'

Route.get('/auth/login', ({ view }) => view.render('auth/login')).as('login')

Route.post('auth/login', 'AuthController.login')
