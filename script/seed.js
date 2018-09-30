'use strict'

const db = require('../server/db')
const { User, Succulent, Review, Category } = require('../server/db/models')

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
      image: '/images/haworthia-big-band.jpg',
      price: 4.99,
      quantity: 100,
      family: 'Asphodelaceae' ,
      genus: 'Haworthia',
      species: 'Attenuata'}),

    Succulent.create({
        name: 'Echeveria',
        description: 'Plants may be evergreen or deciduous. Flowers on short stalks (cymes) arise from compact rosettes of succulent fleshy, often brightly coloured leaves.[2] Species are polycarpic, meaning that they may flower and set seed many times over the course of their lifetimes. Often numerous offsets are produced, and are commonly known as "hen and chicks", which can also refer to other genera, such as Sempervivum, that are significantly different from Echeveria.',
        image: '/images/echeveria.jpg',
        price: 6.99,
        quantity: 50,
        family: 'Crassulaceae',
        genus: 'Echeveria',
        species: 'Echevelia gibbiflora'}),

      Succulent.create({
        name: 'Flowering Kalanchoe',
        description: 'A cousin to the Jade plant, flowering Kalanchoe is a fairly low-maintenance succulent house plant. Flower heads on kalanchoe blossom in bright oranges, pinks, yellow, red, and white on a compact, upright plant about 6-12 inches tall. The flowers last several months, and the green plants are pretty year-round.',
        image: '/images/flowering-kalanchoe.jpg',
        price: 5.00,
        quantity: 75,
        family: 'Crassulaceae',
        genus: 'Kalanchoe',
        species: 'Kalanchoe blossfeldiana'}),

      Succulent.create({
        name: 'String of Pearls',
        description: 'Senecio rowleyanus receives its common name from specialized leaves which are the size and shape of small peas (about ​1⁄4 inch diameter).Its trailing stems can grow 2–3 feet (60–90 cm). There is a small tip on at the distal point of each leaf and a thin band of dark green tissue on the side known as a "window" (see below).',
        image: '/images/string-of-pearls.jpg',
        price: 9.50,
        quantity: 60,
        family: 'Asteraceae',
        genus: 'Senecio',
        species: 'S. rowleyanus'}),

      Succulent.create({
        name: 'Lithops',
        description: 'Individual Lithops plants consist of one or more pairs of bulbous, almost fused leaves opposite to each other and hardly any stem. The slit between the leaves contains the meristem and produces flowers and new leaves. The leaves of Lithops are mostly buried below the surface of the soil, with a partially or completely translucent top surface known as a leaf window which allows light to enter the interior of the leaves for photosynthesis.',
        image: '/images/lithops.jpg',
        price: 9.99,
        quantity: 7,
        family: 'Aizoaceae',
        genus: 'Lithops',
        species: 'Assorted Types'}),

      Succulent.create({
        name: 'Crown of Thorns',
        description: `It is a succulent climbing shrub growing to 1.8 m (5 ft 11 in) tall, with densely spiny stems. The straight, slender spines, up to 3 cm (1.2 in) long, help it scramble over other plants. The leaves are found mainly on new growth,[1] and are obovate, up to 3.5 cm (1.4 in) long and 1.5 cm (0.59 in) broad.`,
        image: '/images/crown-of-thorns.jpg',
        price: 12.99,
        quantity: 45,
        family: 'Euphorbiaceae',
        genus: 'Euphorbia',
        species: 'E. milii'}),

    // Cacti

      Succulent.create({
        name: 'Notocactus',
        description: 'Parodia is a genus of flowering plants in the cactus family Cactaceae, native to the uplands of Argentina, Peru, Bolivia, Brazil, Colombia and Uruguay. This genus has about 50 species, many of which have been transferred from Eriocactus, Notocactus and Wigginsia. They range from small globose plants to 1 m (3 ft) tall columnar cacti. All are deeply ribbed and spiny, with single flowers at or near the crown.',
        image: '/images/notocactus.jpg',
        price: 75.00,
        quantity: 5,
        family: 'Cactaceae',
        genus: 'Parodia',
        species: 'Notocactus',
        isCactus: true}),

      Succulent.create({
        name: 'Parodia Nivosa',
        description: 'Parodia is a genus of flowering plants in the cactus family Cactaceae, native to the uplands of Argentina, Peru, Bolivia, Brazil, Colombia and Uruguay. This genus has about 50 species, many of which have been transferred from Eriocactus, Notocactus and Wigginsia.',
        image: '/images/parodia-nivosa.jpg',
        price: 99.99,
        quantity: 20,
        family: 'Cactaceae',
        genus: 'Parodia',
        species: 'Parodia Nivosa',
        isCactus: true}),

      Succulent.create({
        name: 'Rubutia Kupperiana',
        description: 'Rebutia is a genus in the family Cactaceae, native to Bolivia and Argentina. They are generally small, colorful cacti, globular in form, which freely produce flowers that are relatively large in relation to the body.',
        image: '/images/rebutia-kupperiana.jpg',
        price: 100.00,
        quantity: 2,
        family: 'Cactaceae',
        genus: 'Rebutia',
        species: 'Rubutia Kupperiana',
        isCactus: true}),

      Succulent.create({
        name: 'Fralea Castanea',
        description: 'Frailea is a genus of globular to short cylindrical cacti native to Brazil. These species are cleistogamous. They were first classified in the genus Echinocactus.',
        image: '/images/fralea-castanea.jpg',
        price: 50.00,
        quantity: 45,
        family: 'Cactaceae',
        genus: 'Frailea',
        species: 'Fralea Castanea',
        isCactus: true}),

      Succulent.create({
        name: 'Euphoribia Avasmontana',
        description: `The plants share the feature of having a poisonous, milky, white, latex-like sap, and unusual and unique floral structures. The genus may be described by properties of its members' gene sequences, or by the shape and form (morphology) of its heads of flowers.`,
        image: '/images/euphoribia-avasmontana.jpg',
        price: 70.00,
        quantity: 30,
        family: 'Euphorbiaceae',
        genus: 'Euphorbia',
        species: 'Euphoribia Avasmontana',
        isCactus: true}),

      Succulent.create({
        name: 'Sulcorebutia Rauschii',
        description: 'Rebutia is a genus in the family Cactaceae, native to Bolivia and Argentina. They are generally small, colorful cacti, globular in form, which freely produce flowers that are relatively large in relation to the body.',
        image: '/images/sulcorebutia-rauschii.jpg',
        price: 30.50,
        quantity: 32,
        family: 'Cactaceae',
        genus: 'Rebutia',
        species: 'Sulcorebutia Rauschii',
        isCactus: true}),
    ])

    console.log(`seeded ${succulents.length} succulents`)
    console.log(`seeded successfully`)

    const reviews = await Promise.all([
      Review.create({
        title: 'This succulent is amazing!',
        rating: 5,
        body: 'Wow! This succulent was everything I could have dreamed up and MORE!',
        author: 'Annalee'
      }),
      Review.create({
        title: 'Not sure, it was just OK',
        rating: 3.5,
        body: 'I was under the impression this succulent was able to fly, but it just sits there. Meh.',
        author: 'Some disgruntled person'
      }),
      Review.create({
        title: 'SO GREAT',
        rating: 5,
        body: 'Just loved it',
        author: 'Anon'
      }),
      Review.create({
        title: 'Not good',
        rating: 2.5,
        body: 'I could not find a spot for this plant in my house.',
        author: 'Anon'
      }),
      Review.create({
        title: 'Just lovely!',
        rating: 4,
        body: 'I got this succulent as a gift for my friend and they loved it!',
        author: 'Anon'
      }),
      Review.create({
        title: 'Cute and fun',
        rating: 4.5,
        body: 'Adorable succulent, must have!',
        author: 'Anon'
      })
    ])

    console.log(`seeded ${reviews.length} reviews`)
    console.log(`seeded successfully`)

    const addReviewsToSucculents = await Promise.all([
      Review.findById(1).then(review => review.setSucculent(1)),
      Review.findById(2).then(review => review.setSucculent(2)),
      Review.findById(3).then(review => review.setSucculent(3)),
      Review.findById(4).then(review => review.setSucculent(4)),
      Review.findById(5).then(review => review.setSucculent(5)),
      Review.findById(6).then(review => review.setSucculent(6)),
    ]);

    console.log(`seeded ${addReviewsToSucculents.length} reviews for specific succulents`);
    console.log(`seeded successfully`)

    const categories = await Promise.all([
      Category.create({
        title: 'flowering'
      }),
      Category.create({
        title: 'tiny'
      }),
      Category.create({
        title: 'cactus'
      }),
      Category.create({
        title: 'staff favorite'
      })
    ])
    console.log(`seeded ${categories.length} categories`);
    console.log(`seeded successfully`)

    const lithops = await Succulent.findOne({
      where: {
        name: 'Lithops'
      }
    })

    const fralea = await Succulent.findOne({
      where: {
        name: 'Fralea Castanea'
      }
    })

    const parodia = await Succulent.findOne({
      where: {
        name: 'Parodia Nivosa'
      }
    })

    const tiny = await Category.findOne({
      where: {
        title: 'tiny'
      }
    })

    const lithopsCategory = await lithops.setCategory(tiny)

    const kalanchoe = await Succulent.findOne({
      where: {
        name: 'Flowering Kalanchoe'
      }
    })

    const crown = await Succulent.findOne({
      where: {
        name: 'Crown of Thorns'
      }
    })

    const flowering = await Category.findOne({
      where: {
        title: 'flowering'
      }
    })

    const kalenchoeCategory = await kalanchoe.setCategory(flowering)
    const crownCategory = await crown.setCategory(flowering)

    const cacti = await Succulent.findAll({
      where: {
        isCactus: true
      }
    })

    const cactusCategory = await Category.findOne({
      where: {
        title: 'cactus'
      }
    })

    const setCactiCategory = await cactusCategory.setSucculents(cacti)

    const staffFavorite = await Category.findOne({
      where: {
        title: 'staff favorite'
      }
    })

    const zebra = await Succulent.findOne({
      where: {
        name: `Zebra Haworthia 'Big Band'`
      }
    })

    const echeveria = await Succulent.findOne({
      where: {
        name: 'Echeveria'
      }
    })

    const stringOfPearls = await Succulent.findOne({
      where: {
        name: 'String of Pearls'
      }
    })

    const zebraCategory = await zebra.setCategory(staffFavorite)
    const echeveriaCategory = await echeveria.setCategory(staffFavorite)
    const stringCategory = await stringOfPearls.setCategory(staffFavorite)

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
