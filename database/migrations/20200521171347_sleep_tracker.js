
exports.up = async function(knex) {
  await knex.schema.createTable('users', table => {
      table.increments('id')
      table.string('username', 255).notNullable().unique()
      table.string('password', 255).notNullable()
  } )
  await knex.schema.createTable('sleep_data', table => {
      table.increments('id')
      table.timestamp('start').notNullable().defaultTo(knex.fn.now())
      table.timestamp('end')
      table.float('hours')
      table.float('score_wake')
      table.float('score_day')
      table.float('score_night')
  })
  await knex.schema.createTable('user_data', table => {
      table.increments('id')
      table.integer('user_id').references('id').inTable('users').onDelete('CASCADE').onUpdate('CASCADE')
      table.integer('sleep_id').references('id').inTable('sleep_data').onDelete('CASCADE').onUpdate('CASCADE')
      table.float('mood_score')
      table.float('total_hours')
  })
}

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists('user_data')
  await knex.schema.dropTableIfExists('sleep_data')
  await knex.schema.dropTableIfExists('users')
}
