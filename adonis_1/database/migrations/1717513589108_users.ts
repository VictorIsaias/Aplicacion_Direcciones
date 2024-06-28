import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'users'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.string('email', 255).notNullable().unique()
      table.string('password', 180).notNullable()
      table.string('remember_me_token').nullable()
      table.integer('role_id').unsigned().references('id').inTable('roles').defaultTo(2)
      table.string('phone', 255).notNullable().unique()
      table.string('nickname', 255).notNullable().unique()
      table.string('name', 255).notNullable()
      table.string('lastname', 255).notNullable()
      table.integer('age').notNullable()
      table.boolean('active').notNullable()
      table.date('birthdate').notNullable()
      

      /**
       * Uses timestampz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true }).notNullable()
      table.timestamp('updated_at', { useTz: true }).notNullable()
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
