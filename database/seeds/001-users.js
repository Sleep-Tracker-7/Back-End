const bcrypt = require('bcryptjs')


exports.seed = async function(knex) {
  await knex('users').truncate()
  await knex('users').insert([
    { username: 'Anthony', password: `${await bcrypt.hash('pass', 14)}` },
    { username: 'Josh', password: `${await bcrypt.hash('pass', 14)}`  },
    { username: 'Uzias', password: `${await bcrypt.hash('pass', 14)}`  },
    { username: 'Chucky', password: `${await bcrypt.hash('pass', 14)}`  }
  ])
};
