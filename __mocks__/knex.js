module.exports = jest.fn(({ shouldThrowAnError } = {}) => {
  if (shouldThrowAnError) {
    throw new Error('Error thrown by the mock')
  }
  return {
    destroy: jest.fn()
  }
})
