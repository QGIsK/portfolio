import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
  Route.on('cookiestatement').render('policies/cookiestatement').as('policies.cookiestatement')

  Route.on('disclaimer').render('policies/disclaimer').as('policies.disclaimer')

  Route.on('privacypolicy').render('policies/privacypolicy').as('policies.privacypolicy')
}).prefix('/policy')
