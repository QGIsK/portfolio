import Route from '@ioc:Adonis/Core/Route'

Route.get('/policies/cookiestatement', ({ view }) => view.render('policies/cookiestatement')).as(
  'cookiestatement'
)

Route.get('/policies/disclaimer', ({ view }) => view.render('policies/disclaimer')).as('disclaimer')

Route.get('/policies/privacypolicy', ({ view }) => view.render('policies/privacypolicy')).as(
  'privacypolicy'
)
