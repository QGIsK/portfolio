/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async ({ view }) => {
  return view.render('index')
}).as('index')

Route.get('/policies/cookiestatement', async ({ view }) => {
  return view.render('policies/cookiestatement')
}).as('cookiestatement')

Route.get('/policies/disclaimer', async ({ view }) => {
  return view.render('policies/disclaimer')
}).as('disclaimer')

Route.get('/policies/privacypolicy', async ({ view }) => {
  return view.render('policies/privacypolicy')
}).as('privacypolicy')

Route.get('*', async ({ view }) => {
  return view.render('index')
}).as('not_found')
