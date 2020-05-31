
exports.seed = async function(knex) {
  await knex('sleep_data').truncate()
  await knex('sleep_data').insert([
    { user_id: 1, start: '2020-05-28 23:09:33', end: '2020-05-29 22:09:34', hours: 24, score_wake: 0.25, score_day: 0.50, score_night: 1 },
    { user_id: 2, start: '2020-05-29 23:00:33', end: '2020-05-30 00:00:33', hours: 1, score_wake: 0.25, score_day: 0.25, score_night: 0.25 },
    { user_id: 3, start: '2020-05-29 20:00:00', end: '2020-05-30 00:00:00', hours: 4, score_wake: 0.25, score_day: 0.25, score_night: 0.25 },
    { user_id: 4, start: '2020-05-29 20:00:00', end: '2020-05-30 00:00:00', hours: 4, score_wake: 0.25, score_day: 0.25, score_night: 0.25 }
  ])
};