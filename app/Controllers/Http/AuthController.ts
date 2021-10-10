// import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class AuthController {
  public async login({ auth, request, response }) {
    const email = request.input('email')
    const password = request.input('password')

    try {
      await auth.use('web').attempt(email, password, true)
      response.redirect('/dashboard')
    } catch {
      return response.badRequest('Invalid credentials')
    }
  }

  public async logout({ auth, response }) {
    await auth.use('web').logout()
    response.redirect('/login')
  }
}