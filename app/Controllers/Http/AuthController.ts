import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class AuthController {
  public async login({ auth, request, session, response }: HttpContextContract) {
    const email = request.input('email')
    const password = request.input('password')

    await auth.attempt(email, password)

    return response.redirect('/auth/login')
  }

  public async destroy({ auth, response }: HttpContextContract) {
    await auth.logout()
    console.log(auth.isLoggedIn)

    response.redirect('/auth/login')
  }
}
