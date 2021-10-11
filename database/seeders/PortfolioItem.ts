import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import PortfolioItem from 'App/Models/PortfolioItem'

export default class PortfolioItemSeeder extends BaseSeeder {
  public async run() {
    // Write your database queries inside the run method
    await PortfolioItem.createMany([
      {
        shown: true,

        mdUp: '8',
        mdDown: '10',

        name: 'Bassen Met Lasse',
        about: 'Website for Bassen Met Lasse, Made with VueJS and NodeJS',

        image: 'https://cdn.demiann.dev/images/portfolio/BassenMetLasse.WebP',
        url: 'https://bassenmetlasse.nl',

        order: 1,
      },
      {
        shown: true,

        mdUp: '7',
        mdDown: '10',

        name: 'Reviews by Me',
        about:
          'Reviews By Me is a Blog Application <br />Made with Vue, Express, NodeJS and MongoDB',

        image: 'https://cdn.demiann.dev/images/portfolio/ReviewsByMe.WebP',
        url: 'https://reviewsbyme.demiann.dev',

        order: 2,
      },
      {
        shown: true,

        mdUp: '4',
        mdDown: '10',

        name: 'Shadow bot',
        about: 'Website for the Shadow Discord bot <br />Made with Vue and NodeJS',

        image: 'https://cdn.demiann.dev/images/portfolio/ShadowBot.WebP',
        url: 'https://shadowbot.demiann.dev',

        order: 3,
      },
    ])
  }
}
