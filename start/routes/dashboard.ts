import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
  Route.get('/', ({ view }) => view.render('dashboard/index.edge'))
})
  .prefix('/dashboard')
  .middleware('auth')
