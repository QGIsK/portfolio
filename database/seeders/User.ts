import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import User from 'App/Models/User'
import Env from '@ioc:Adonis/Core/Env'

export default class UserSeeder extends BaseSeeder {
  public async run() {
    // Write your database queries inside the run method
    await User.createMany([
      {
        email: Env.get('ADMIN_EMAIL'),
        password: Env.get('ADMIN_PASSWORD'),
      },
    ])
  }
}
