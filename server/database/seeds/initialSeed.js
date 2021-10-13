import userList  from './data/users.js'
import wineList from './data/wines.js'

export async function seed(knex) {
  // Deletes ALL existing entries
  const deleteAllTables = () => {
    return knex('users')
      .del()
      .then(function() {
        return knex('wines').del()
      })
  }

  const seedUsers = async () => {
    let users = userList
    for (let user of users) {
      await knex('users').insert(user)
    }
  }

  const seedWines = async () => {
    let wines = wineList
    for (let wine of wines) {
      await knex('wines').insert(wine)
    }
  }

  await deleteAllTables()
  await seedUsers()
  await seedWines()
}
