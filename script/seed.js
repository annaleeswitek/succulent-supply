'use strict'

const db = require('../server/db')
const { User, Succulent } = require('../server/db/models')

async function seed() {
  await db.sync({force: true})
  console.log('db synced!')

  const users = await Promise.all([
    User.create({email: 'user@user.user', password: 'user'}),
    User.create({email: 'admin@admin.admin', password: 'admin'})
  ])

  console.log(`seeded ${users.length} users`)
  console.log(`seeded successfully`)

  const succulents = await Promise.all([

    Succulent.create({
      name: `Zebra Haworthia 'Big Band'`,
      description: 'Haworthia are really easy to grow. Require very well drained soil to thrive. Place it in a sunny window, preferably a south facing window. Water it once every two to three weeks. Feed it 3 or 4 times per year and it will be very happy. As the plant matures, offshoots may appear around the base of the plant. Occasionally it will send a long thin flower spike from the center of the plant where tiny baby offshoots will develop',
      price: 4.99,
      quantity: 100,
      family: 'Asphodelaceae' ,
      genus: 'Haworthia',
      species: 'Attenuata',
      isCactus: false}),

    // Succulent.create({
    //   name: ``,
    //   description: '',
    //   price: '',
    //   quantity: '',
    //   family: '',
    //   genus: '',
    //   species: '',
    //   isCactus: false}),
  ])

  console.log(`seeded ${succulents.length} succulents`)
  console.log(`seeded successfully`)
}



async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

if (module === require.main) {
  runSeed()
}

module.exports = seed
