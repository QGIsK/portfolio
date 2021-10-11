// import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Env from '@ioc:Adonis/Core/Env'
import Mail from '@ioc:Adonis/Addons/Mail'
import { schema, rules } from '@ioc:Adonis/Core/Validator'

export default class ContactController {
  public async store({ request, response }) {
    const contactRequestSchema = schema.create({
      time: schema.string({ trim: true }, [rules.minLength(2), rules.maxLength(25)]),
      from: schema.string({ trim: true }, [rules.minLength(3), rules.maxLength(50)]),
      email: schema.string({ trim: true }, [rules.email()]),
      text: schema.string({ trim: true }, [rules.minLength(25), rules.maxLength(500)]),
    })

    try {
      const payload = await request.validate({ schema: contactRequestSchema })
      await Mail.send((message) => {
        message
          .from(Env.get('MAIL_FROM'))
          .to(Env.get('MAIL_TO'))
          .subject('Contact Request')
          .priority('high')
          .htmlView('emails/contact', { payload })
      })

      response.ok('')
    } catch (error) {
      console.log(error)
      response.badRequest(error.messages)
    }
  }
}
