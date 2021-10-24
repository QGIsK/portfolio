import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class AuthController {
  public async login({ auth, request, session, response }: HttpContextContract) {
    const email = request.input('email')
    const password = request.input('password')

    try {
      await auth.attempt(email, password)
      response.redirect('/dashboard')
    } catch (e) {
      session.flash({
        errors: {
          email: "Seems that isn't quite correct. Try again.",
        },
      })

      return response.redirect('/auth/login')
    }
  }

  public async destroy({ auth, response }: HttpContextContract) {
    await auth.logout()
    console.log(auth.isLoggedIn)

    response.redirect('/auth/login')
  }
}
