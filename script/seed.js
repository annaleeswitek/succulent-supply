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
      image: '/images/haworthia-big-band.jpg',
      price: 4.99,
      quantity: 100,
      family: 'Asphodelaceae' ,
      genus: 'Haworthia',
      species: 'Attenuata',
      isCactus: false}),

    Succulent.create({
      name: 'Echeveria',
      description: 'Plants may be evergreen or deciduous. Flowers on short stalks (cymes) arise from compact rosettes of succulent fleshy, often brightly coloured leaves.[2] Species are polycarpic, meaning that they may flower and set seed many times over the course of their lifetimes. Often numerous offsets are produced, and are commonly known as "hen and chicks", which can also refer to other genera, such as Sempervivum, that are significantly different from Echeveria. Many species of Echeveria serve important environmental roles, such as those of host plants for butterflies. For example, the butterfly Callophrys xami uses several species of Echeveria, such as Echevelia gibbiflora, for suitable host plants. Even more, these plants are integral to the oviposition process of C. xami and some other butterfly species as well',
      image: '/images/echeveria.jpg',
      price: 6.99,
      quantity: 50,
      family: 'Crassulaceae',
      genus: 'Echeveria',
      species: 'Echevelia gibbiflora',
      isCactus: false}),

    Succulent.create({
      name: 'Flowering Kalanchoe',
      description: 'A cousin to the Jade plant, flowering Kalanchoe is a fairly low-maintenance succulent house plant. Flower heads on kalanchoe blossom in bright oranges, pinks, yellow, red, and white on a compact, upright plant about 6-12 inches tall. The flowers last several months, and the green plants are pretty year-round.',
      image: '/images/flowering-kalanchoe.jpg',
      price: 5.00,
      quantity: 75,
      family: 'Crassulaceae',
      genus: 'Kalanchoe',
      species: 'Kalanchoe blossfeldiana',
      isCactus: false}),

    Succulent.create({
      name: 'String of Pearls',
      description: 'Senecio rowleyanus receives its common name from specialized leaves which are the size and shape of small peas (about ​1⁄4 inch diameter).Its trailing stems can grow 2–3 feet (60–90 cm). There is a small tip on at the distal point of each leaf and a thin band of dark green tissue on the side known as a "window" (see below). It blooms during the summer and, like all asterids, it has a compound flower. The trumpet shaped flower forms clusters (about ​1⁄2 inch diameter) of small white flowers with colorful stamens. The flower will last about a month and is said to smell like cinnamon and other spices.',
      image: '/images/string-of-pearls.jpg',
      price: 9.50,
      quantity: 60,
      family: 'Asteraceae',
      genus: 'Senecio',
      species: 'S. rowleyanus',
      isCactus: false}),

    Succulent.create({
      name: 'Lithops',
      description: 'Individual Lithops plants consist of one or more pairs of bulbous, almost fused leaves opposite to each other and hardly any stem. The slit between the leaves contains the meristem and produces flowers and new leaves. The leaves of Lithops are mostly buried below the surface of the soil, with a partially or completely translucent top surface known as a leaf window which allows light to enter the interior of the leaves for photosynthesis.',
      image: '/images/lithops.jpg',
      price: 9.99,
      quantity: 7,
      family: 'Aizoaceae',
      genus: 'Lithops',
      species: 'Assorted Types',
      isCactus: false}),

    Succulent.create({
      name: 'Crown of Thorns',
      description: `It is a succulent climbing shrub growing to 1.8 m (5 ft 11 in) tall, with densely spiny stems. The straight, slender spines, up to 3 cm (1.2 in) long, help it scramble over other plants. The leaves are found mainly on new growth,[1] and are obovate, up to 3.5 cm (1.4 in) long and 1.5 cm (0.59 in) broad. The flowers are small, subtended by a pair of conspicuous petal-like bracts, variably red, pink or white, up to 12 mm (0.47 in) broad.[2] The sap is moderately poisonous, and causes irritation on contact with skin or eyes. If ingested, it causes severe stomach pain, irritation of the throat and mouth, and vomiting. The poisonous ingredients have been identified as phorbol esters.[3] Wat Phrik in Thailand claims to be the home of the world's tallest Christ thorn plant.[4] Euphorbia Milii could be propagated from cuttings`,
      image: '/images/crown-of-thorns.jpg',
      price: 12.99,
      quantity: 45,
      family: 'Euphorbiaceae',
      genus: 'Euphorbia',
      species: 'E. milii',
      isCactus: false}),

  // Cacti

    Succulent.create({
      name: 'Notocactus',
      description: 'Parodia is a genus of flowering plants in the cactus family Cactaceae, native to the uplands of Argentina, Peru, Bolivia, Brazil, Colombia and Uruguay. This genus has about 50 species, many of which have been transferred from Eriocactus, Notocactus and Wigginsia. They range from small globose plants to 1 m (3 ft) tall columnar cacti. All are deeply ribbed and spiny, with single flowers at or near the crown. Some species produce offsets at the base. They are popular in cultivation, but must be grown indoors where temperatures fall below 10 °C (50 °F).  The genus is named after Domingo Parodi, one of the early investigators of the flora of Paraguay.',
      image: '/images/notocactus.jpg',
      price: 75.00,
      quantity: 5,
      family: 'Cactaceae',
      genus: 'Parodia',
      species: 'Notocactus',
      isCactus: true}),

    Succulent.create({
      name: 'Parodia Nivosa',
      description: 'Parodia is a genus of flowering plants in the cactus family Cactaceae, native to the uplands of Argentina, Peru, Bolivia, Brazil, Colombia and Uruguay. This genus has about 50 species, many of which have been transferred from Eriocactus, Notocactus and Wigginsia. They range from small globose plants to 1 m (3 ft) tall columnar cacti. All are deeply ribbed and spiny, with single flowers at or near the crown. Some species produce offsets at the base. They are popular in cultivation, but must be grown indoors where temperatures fall below 10 °C (50 °F). The genus is named after Domingo Parodi, one of the early investigators of the flora of Paraguay',
      image: '/images/parodia-nivosa.jpg',
      price: 99.99,
      quantity: 20,
      family: 'Cactaceae',
      genus: 'Parodia',
      species: 'Parodia Nivosa',
      isCactus: true}),

    Succulent.create({
      name: 'Rubutia Kupperiana',
      description: 'Rebutia is a genus in the family Cactaceae, native to Bolivia and Argentina. They are generally small, colorful cacti, globular in form, which freely produce flowers that are relatively large in relation to the body. They have no distinctive ribs, but do have regularly arranged small tubercles. They are considered fairly easy to grow and they may produce large quantities of seeds that germinate freely around the parent plant.',
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
      description: `The plants share the feature of having a poisonous, milky, white, latex-like sap, and unusual and unique floral structures.[3] The genus may be described by properties of its members' gene sequences, or by the shape and form (morphology) of its heads of flowers. When viewed as a whole, the head of flowers looks like a single flower (a pseudanthium). It has a unique kind of pseudanthium, called a cyathium, where each flower in the head is reduced to its barest essential part needed for sexual reproduction. The individual flowers are either male or female, with the male flowers reduced to only the stamen, and the females to the pistil.[3] These flowers have no sepals, petals, or other parts that are typical of flowers in other kinds of plants. Structures supporting the flower head and beneath have evolved to attract pollinators with nectar, and with shapes and colors that function the way petals and other flower parts do in other flowers. It is the only genus of plants that has all three kinds of photosynthesis, CAM, C3, and C4.`,
      image: '/images/euphoribia-avasmontana.jpg',
      price: 70.00,
      quantity: 30,
      family: 'Euphorbiaceae',
      genus: 'Euphorbia',
      species: 'Euphoribia Avasmontana',
      isCactus: true}),

    Succulent.create({
      name: 'Sulcorebutia Rauschii',
      description: 'Rebutia is a genus in the family Cactaceae, native to Bolivia and Argentina. They are generally small, colorful cacti, globular in form, which freely produce flowers that are relatively large in relation to the body. They have no distinctive ribs, but do have regularly arranged small tubercles. They are considered fairly easy to grow and they may produce large quantities of seeds that germinate freely around the parent plant.',
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
