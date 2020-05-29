
exports.up = async function(knex) {
  await knex.schema.createTable('users', table => {
      table.increments('id')
      table.string('username', 255).notNullable().unique()
      table.string('password', 255).notNullable()
  } )
  await knex.schema.createTable('sleep_data', table => {
      table.increments('id')
      table.integer('user_id').notNullable().references('id').inTable('users').onDelete('CASCADE').onUpdate('CASCADE')
      table.timestamp('start').notNullable().defaultTo(knex.fn.now())
      table.timestamp('end')
      table.float('hours')
      table.float('score_wake')
      table.float('score_day')
      table.float('score_night')
      
  })
}

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists('sleep_data')
  await knex.schema.dropTableIfExists('users')
}
