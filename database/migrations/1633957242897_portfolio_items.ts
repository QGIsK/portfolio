import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class PortfolioItems extends BaseSchema {
  protected tableName = 'portfolio_items'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      table.boolean('shown').defaultTo(true)

      table.string('md_up').defaultTo('8')
      table.string('md_down').defaultTo('10')

      table.string('name').defaultTo('')
      table.string('about').defaultTo('Made with NodeJS And VueJS')

      table.string('image').defaultTo('https://cdn.demiann.dev/images/Placeholder.WebP')

      table.string('url').defaultTo('#')

      table.integer('order')
      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
