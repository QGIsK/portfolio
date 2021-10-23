// import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class AuthController {
  public async login({ auth, request, session, response }) {
    const email = request.input('email')
    const password = request.input('password')

    try {
      await auth.use('web').attempt(email, password)
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

  public async logout({ auth, response }) {
    await auth.use('web').logout()
    response.redirect('/login')
  }
}
