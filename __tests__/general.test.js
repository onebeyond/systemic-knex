
const systemicKnext = require('../index')

describe('All Schema files validation', () => {
  let knexInstance

  beforeAll(() => {
    knexInstance = systemicKnext()
  })

  test('Should expose systemic compatible functions', () => {
    expect(knexInstance.start).toBeInstanceOf(Function)
    expect(knexInstance.stop).toBeInstanceOf(Function)
  })

  test('Should expose knex instance with basic config', async () => {
    const knexClient = await knexInstance.start({ config: { pool: true } })
    expect(knexClient.destroy).toBeTruthy()
  })

  test('Should expose knex instance with nested knex config)', async () => {
    const knexClient = await knexInstance.start({ config: { knex: { pool: true } } })
    expect(knexClient.destroy).toBeTruthy()
  })

  test('Should throw an error if the config is invalid', async () => {
    await expect(knexInstance.start({ config: { shouldThrowAnError: true } })).rejects.toThrow()
  })

  test.todo('Should stop destroying the pool')
  test.todo('Should stop without destroying the pool')
  test.todo('Should include a pool if the config use a compatible client (mysql, pg..)')
})
