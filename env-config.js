const prod = process.env.NODE_ENV === 'dev'

module.exports = {
  'process.env.BACKEND_URL': prod ? '/website-gh' : ''
}
