import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
  Route.get('/', 'DashboardController.index')
  Route.get('/edit/:id', 'DashboardController.show')
  Route.post('/edit/:id', 'DashboardController.store')
})
  .prefix('/dashboard')
  .middleware('auth')

Route.group(() => {
  Route.on('/').render('dashboard/blog/index.edge')
})
  .prefix('/dashboard/blog')
  .middleware('auth')

Route.group(() => {
  Route.on('/').render('dashboard/redirector/index.edge')
})
  .prefix('/dashboard/redirector')
  .middleware('auth')
