const knex = require('knex')

module.exports = () => {
  let instance
  let hasPool

  const start = async ({ config: configuration }) => {
    const config = configuration.knex || configuration
    try {
      instance = knex(config)
      hasPool = Boolean(config.pool) || config.client === 'pg' || config.client === 'mysql'
      return instance
    } catch (error) {
      throw new Error(error)
    }
  }

  const stop = async () => {
    if (!hasPool) { return }
    return instance.destroy()
  }

  return {
    dependsOn: ['config'],
    start,
    stop
  }
}
